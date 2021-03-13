# -*- coding: utf-8 -*-
"""
Created on Sat Mar 13 21:36:09 2021

@author: Admin
"""

import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression

def standardizer(train_df, test_df):
    
    train_df_unskewed = np.log(train_df)
    test_df_unskewed = np.log(test_df)
    
    mean = train_df_unskewed.mean(axis = 0)
    std = train_df.std(axis = 0)
    
    train_df_standardized = (train_df_unskewed - mean) / std 
    test_df_standardized = (test_df_unskewed - mean) / std
    
    return mean,std,train_df_standardized, test_df_standardized

def add_interaction(X):
    
    features = X.columns
    X_copy = X.copy(deep = True)
    
    for i in range(len(features)):
        
        feature_i_name = features[i]
        feature_i_data = X[feature_i_name]
        
        for j in range(i+1, len(features)):
            
            feature_j_name = features[j]
            feature_j_data = X[feature_j_name]
            
            feature_name = feature_i_name + '_x_' + feature_j_name
            X_copy[feature_name] = feature_i_data * feature_j_data
            
    return X_copy

def logistic_reg_model(X, y):
    
    model = LogisticRegression()
    model.fit(X, y)
    return model