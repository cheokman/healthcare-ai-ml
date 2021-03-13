import lifelines
import pandas as pd
import numpy as np
from lifelines.datasets import load_lymphoma

def load_data():
    df = load_lymphoma()
    df.loc[:, 'Event'] = df.Censor
    df = df.drop(['Censor'], axis=1)
    return df

