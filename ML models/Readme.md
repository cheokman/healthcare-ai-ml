# Machine Learning Models

There are 4 ML models:

- Disease predictor
- Heart Failure Risk Prediction (Using Logisitic Regression)
- Heart Failure Risk Prediction (Using Random Forest)
- Survival Probability that varies with time for Lymphoma Cancer patients

## Survival Probability that vary with time [Timeline Approach]

- This model takes time t [in months] as an input and outputs a probability of survival at time t of patient with Stage III or Stage IV Lymphom Cancer.
- ![Lymphoma Cancer Graph](https://github.com/Dhaiwat10/healthcare-ai-ml/blob/main/ML%20models/Images/Lymphoma.png)
- This model is trained on Lymphoma cancer patients dataset, It is trained using `Kaplan Meier Estimate` 
![Kaplan-Meier Estimate](https://github.com/Dhaiwat10/healthcare-ai-ml/blob/main/ML%20models/Images/kaplan-meier-formula.png)
where t_i are the events observed in the dataset and d_i is the number of deaths at time t_i and n_i is the number of people who we know have survived up to time t_i.
- This can be really benefitial to Insurance firms and patients as Insurance firms can recommend better insurance Policies to the patients.
 
## Heart failure risk Prediction[Linear & Tree based]

Cardiovascular disease or heart disease describes a range of conditions that affect your heart. Diseases under the heart disease umbrella include blood vessel diseases, such as coronary artery disease. From WHO statistics every year 17.9 million dying from heart disease. The medical study says that human life style is the main reason behind this heart problem. Apart from this there are many key factors which warns that the person may/maynot getting chance of heart disease.

- This model takes lab results of a patients as an input and outputs Probability of having a heart failure at any point of time.
- The model is evaluated using `Concordance index(c-index)`.
>When considering all pairs of patients (A, B), the model says that patient A has a higher risk score than patient B when, in the observed data, patient A actually died and patient B actually lived. In our case, our model is a binary classifier, where each risk score is either 1 (the model predicts that the patient will die) or 0 (the patient will live).
>
> More formally, defining 
- `permissible pairs_ of patients as pairs where the outcomes are different`, 
- `concordant pairs as permissible pairs where the patient that died had a higher risk score (i.e. our model predicted 1 for the patient that died and 0 for the one that lived)`
- `risk_ties as permissible pairs where the risk scores were equal (i.e. our model predicted 1 for both patients or 0 for both patients)`, the C-Index is equal to:
>
![c-index formula](https://github.com/Dhaiwat10/healthcare-ai-ml/blob/main/ML%20models/Images/cindex.png)
- It also helps Doctors to point out certain factors that heavily impact the patient's condition.
![prediction explainer](https://github.com/Dhaiwat10/healthcare-ai-ml/blob/main/ML%20models/Images/Figure.png)
![2](https://github.com/Dhaiwat10/healthcare-ai-ml/blob/main/ML%20models/Images/Figure(1).png)
- This can be helpful for doctors to prioritize a particular patient's treatment if his/her risk score is higher than other patients.
  


## Disease Predictor

- Disease predictor takes minimum 3 symptoms as an Input and outputs 3 most likely diseases along with their probabilities. 
- Sometimes Symptoms can be mis-interpreted by doctors, which leads to wrong treatments and medicines. This Predictor makes sure that No possibility of disease is overlooked!
- This model is trained on 5000 records which includes 41 unique diseases and 131 Symptoms. 
- After trying different approaches, Simple Artificial neural Network turned out to be the best.





## Tech

Dillinger uses a number of open source projects to work properly:

- [Keras](https://keras.io/) - To build Artificial neural network
- [lifelines](https://lifelines.readthedocs.io/en/latest/) - Python library for Medical & Survival data analysis
- [shap](https://shap.readthedocs.io/en/latest/index.html) - python library to visualize how machine learning algorithm made its prediction
- [Scikit-learn](https://scikit-learn.org/stable/) - To develop ML models and other analysis

