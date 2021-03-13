# -*- coding: utf-8 -*-
"""
Created on Sat Mar 13 21:53:14 2021

@author: Admin
"""

import pandas as pd
import numpy as np
import pickle
from utils_logistic import *
from risk_model_linear import pred_scalar

model = pickle.load(open('heart_failure_risk_predictor.sav', 'rb')) 

def pred_risk_of_single_patient(age,sbp,dbp,chol):
    
    data = {
        'Age': [age],
        'Systolic_BP': [sbp],
        'Diastolic_BP': [dbp],
        'Cholesterol': [chol]
        }
    
    df = pd.DataFrame(data)
    df = pred_scalar(df)
    df_with_interaction = add_interaction(df)
    risk = model.predict_proba(df_with_interaction)[:, 1]
    print(f'Risk of Heart Failure: {risk[0]*100:.4f} %')

#Enter Patient's Age, Systolic BP, Diastolic BP and Cholesterol     
pred_risk_of_single_patient(75.0,245.0,190.0,210.0)
