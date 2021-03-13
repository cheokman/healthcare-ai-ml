# -*- coding: utf-8 -*-
"""
Created on Sat Mar 13 14:29:22 2021

@author: Admin
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
import pickle
from cindex import cindex
from utils_logistic import *

X = pd.read_csv('X_data.csv', index_col = 0)
y_df = pd.read_csv('y_data.csv', index_col = 0)
y = y_df['y']

X_train_raw, X_test_raw, y_train, y_test = train_test_split(X, y, train_size = 0.75, random_state = 31)

mean1, std1, X_train, X_test = standardizer(X_train_raw, X_test_raw)

model_1 = logistic_reg_model(X_train, y_train)  
#print(model_1.coef_)        #Age and Systolic_BP have the highest impact on the output 
def pred_scalar(df):
    
    df_unskewed = np.log(df)
    df_standardized = (df_unskewed - mean1) / std1
    
    return df_standardized


X_train_with_interaction = add_interaction(X_train)
X_test_with_interaction = add_interaction(X_test)
    
model_with_interaction = logistic_reg_model(X_train_with_interaction, y_train)

scores_X = model_1.predict_proba(X_test)[:, 1]
c_index_X = cindex(y_test.values, scores_X)

scores_X_with_interaction = model_with_interaction.predict_proba(X_test_with_interaction)[:, 1]
c_index_X_int_test = cindex(y_test.values, scores_X_with_interaction)

print(f"c-index on test set without interactions is {c_index_X:.4f}")
print(f"c-index on test set with interactions is {c_index_X_int_test:.4f}")
     
X_test_risk = X_test_with_interaction.copy(deep=True)
X_test_risk.loc[:, 'risk'] = model_with_interaction.predict_proba(X_test_risk)[:, 1]
X_test_risk = X_test_risk.sort_values(by='risk', ascending = False)

fname = 'heart_failure_risk_predictor.sav'
pickle.dump(model_with_interaction, open(fname, 'wb'))


    
    
    
    
    
    
                                               
    
    