# -*- coding: utf-8 -*-
"""
Created on Thu Mar 11 18:04:15 2021

@author: Admin
"""


#!pip install lifelines

import lifelines
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from lifelines import KaplanMeierFitter as KM
from lifelines.statistics import logrank_test
from lifelines.datasets import load_lymphoma

def load_data():
    df = load_lymphoma()
    df.loc[:, 'Event'] = df.Censor
    df = df.drop(['Censor'], axis=1)
    return df

data = load_data()

print(data.shape)
print(data['Stage_group'].unique())
data.Time.hist()
plt.xlabel('observation time before death in days')
plt.ylabel('Number of patients')

def naive_estimator(t, df):
    
    s_t = 0.0
    X_t = len(df[df['Time'] > t])
    M_t = len(df[(df['Time'] > t) | df['Event'] == 1])
    S_t = X_t / M_t
    
    return S_t

max_time = data.Time.max()
x = range(0, max_time+1)
y = np.zeros(len(x))

for i,t in enumerate(x):
    y[i] = naive_estimator(t, data)
    
plt.plot(x, y)
plt.title('Naive Survival Estimator')
plt.xlabel('Time')
plt.ylabel('Estimated Cumulated Survival Rate')
plt.show()

def Kaplan_meier(df):
    
    event_times = [0]
    p = 1.0 #At t = 0 s = 1  
    s = [p]
    
    observed_event_time = df['Time'].unique()
    observed_event_time = sorted(observed_event_time)
    
    for t in observed_event_time:
        
        #num who survived at time t
        n_t = len(df[df['Time'] >= t])
        
        #num who died at time t
        d_t = len(df[(df['Time'] == t) & (df['Event'] == 1)])
        
        #updating probability p
        p = p * (1 - (d_t / n_t))
        s.append(p)
        event_times.append(t)
        
    return event_times, s

print(data)

S1 = data[data.Stage_group == 1]
km1 = KM()
km1.fit(S1.loc[:, 'Time'], event_observed = S1.loc[: , 'Event'], label = 'Stage III Lymphoma Cancer')

S2 = data[data.Stage_group == 2]
km2 = KM()
km2.fit(S2.loc[:, 'Time'], event_observed = S2.loc[: , 'Event'], label = 'Stage IV Lymphoma Cancer') 

ax = km1.plot(ci_show =False) 
km2.plot(ax = ax, ci_show = False)
plt.xlabel('Time (In months)')
plt.ylabel('Survival probability Estimate')

survivals = pd.DataFrame([24,60,120,240], columns = ['time'])
survivals.loc[:, 'Group 1(Stage III)'] = km1.survival_function_at_times(survivals['time']).values
survivals.loc[:, "Group 2(Stage IV)"] = km2.survival_function_at_times(survivals['time']).values

print(survivals)

          






