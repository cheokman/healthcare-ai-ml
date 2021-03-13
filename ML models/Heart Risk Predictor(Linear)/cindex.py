# -*- coding: utf-8 -*-
"""
Created on Sat Mar 13 19:00:51 2021

@author: Admin
"""


import pandas as pd

def cindex(y_true, scores):
    
    n = len(y_true)
    assert len(scores)
    
    concordant = 0
    permissible = 0
    ties = 0
    
    for i in range(n):
        
        for j in range(i+1,n):
            
            if (y_true[i] != y_true[j]):
                permissible += 1
                
                if (scores[i] == scores[j]):
                    ties += 1
                    continue
                if (y_true[i] == 0 and y_true[j] == 1):
                    if (scores[i] < scores[j]):
                        concordant += 1
                
                if (y_true[i] == 1 and y_true[j] == 0):
                    if (scores[i] > scores[j]):
                        concordant += 1
                        
    c_index = (concordant + (0.5 * ties)) / permissible
    
    return c_index
                