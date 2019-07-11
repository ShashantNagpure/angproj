class Operation():
    def __init__(self,input_nodes=[]):
        self.input_nodes=input_nodes
        self.output_nodes=[]
        for node in self.input_nodes:
            node.output_nodes.append(self)
        _default_graph.operations.append(self)
    
    def compute(self):
        pass

class add(Operation):
    def __init__(self,x,y):
        super().__init__([x,y])
    def compute(self,xvar,yvar):
        return xvar+yvar

class multiply(Operation):
    def __init__(self,x,y):
        super().__init__([x,y])
    def compute(self,xvar,yvar):
        return xvar*yvar
    
class matmul(Operation):
    def __init__(self,x,y):
        super().__init__([x,y])
    def compute(self,xvar,yvar):
        return xvar.dot(yvar)

class Placeholder():
    def __init__(self):
        self.output_nodes=[]
        _default_graph.placeholders.append(self)
        
class Variable():
    def __init__(self,init_value=None):
        self.value=init_value
        self.output_nodes=[]
        _default_graph.variables.append(self)

class Graph():
    def __init__(self):
        self.operations=[]
        self.variables=[]
        self.placeholders=[]
    def set_as_default(self):
        global _default_graph
        _default_graph=self

import numpy as np
def traverse_postorder(operation):
    nodes_postorder = []
    def recurse(node):
        if isinstance(node, Operation):
            for input_node in node.input_nodes:
                recurse(input_node)
        nodes_postorder.append(node)

    recurse(operation)
    return nodes_postorder

class Session():
    def run(self,operation,feed_dict={}):
        nodes_postorder=traverse_postorder(operation)
        for node in nodes_postorder:
            if type(node)==Placeholder:
                node.output=feed_dict[node]
            elif type(node)==Variable:
                node.output=node.value
            else:
                node.inputs=[input_node.output for input_node in node.input_nodes]
                node.output=node.compute(*node.inputs)
            if type(node.output)==list:
                node.output=np.array(node.output)
        return operation.output
    
g=Graph()
g.set_as_default()
A=Variable([[10,20],[30,40]])
b=Variable([1,1])
x=Placeholder()
y=matmul(A,x)
z=add(y,b)

sess = Session()
print(sess.run(z,{x:10}))
        
import matplotlib.pyplot as plt

def sigmoid(z):
    return 1/(1+np.exp(-z))
sample_z=np.linspace(-10,10,100)
sample_a=sigmoid(sample_z)
plt.plot(sample_z,sample_a)

class Sigmoid(Operation):
    def __init__(self,z):
        super().__init__(z)
    def compute(self,zval):
       return 1/(1+np.exp(-z)) 

from sklearn.datasets import make_blobs
data=make_blobs(n_samples=50,n_features=2,centers=2,random_state=75)
print(data)
features=data[0]
labels=data[1]
plt.scatter(features[:,0],features[:,1],c=labels)
from distutils.sysconfig import get_python_lib
print(get_python_lib())