# **Healthcare with AI/ML** 🥼🤖

This is the hackathon project repository for [HACKBASH 2021](https://dsc-hackbash-2021.web.app/).

---

## **Idea Discription**

The core concept of this idea is to digitalise and automate the `Heathcare Ecosystem`.

There are many disadvantages in the current ecosystem
--

    - Non digitalize Personal Health Record.
    - Scattered Health record data.
    - No predictions from the available data.
    - No past records available to heath centers.
    - Wrong diagnoses and treatments due to lack of knowledge of patient history.
    - Insurance of many people becomes null and void due to unexpected diseases and taking up the wrong insurance which don't cover that disease. 

---

## **What are we proposing?!**

Let us define the terms what we will going to use in the further documentation.

1. **PHR** (Personal Heath Record)
    - It will be a digitalized version of personal report of individuals.
    - It will contains **past** and **current** diseases and treatments of patients.
    - It will use by the users/patients to track thier heath record.

2. **EHR** (Electronic Health Record)
    - It will be a digitalized version of patients health care life.
    - Along with **PHR** it will also contains:
        - **Future predictions** of the diseases based on symptoms.
        - Prediction of the treatment based upon the past diagnoses.
    - It will be used by Health care providers.

---
## **Our StakeHolders / Benificiaries**

![stakeholder](https://user-images.githubusercontent.com/47498552/111021557-371ef780-83f3-11eb-8f3e-4665fd49e2b7.PNG)

1. **Patients**:
    - They will be `users` or `cunsumers` which will use the system for personal use

2. **Care Providers:**
    - `Hospitals`, `Clinics`, `physicians` and other institutions or organisation which provide health care comes under this.

3. **Intermidiaries**
    - `Government` or the `Insurance Companies` which provides resources/money for the treatment comes under this.

---

## **How our Machine Learning Alogrithm works?!**

![image](https://user-images.githubusercontent.com/47498552/111023180-9255e780-83fd-11eb-85d3-8e2867ed164e.png)

We have *3* different alogorithms:

1. Prediction of the future diseases based on EHR.
2. Recomendation system for the intermidiaries to give precise 'insurance policy' based on PHR.
3. Prediction of future 'Survival Probability' for 'Lymphoma Cancer' patients.

Rather than using the traditional `matrix feature table` to train algorithms we've used a `Timeline` based approach.

### TimeLine Approach

- Rather than training a model based on the directly a tabular format what it does is first arrange the data in a sequence.
- By sequencing there will be less overlapping and ambigous results in the data set
- Which finlly leads to a more efficient algorithm.
    
![timeine](https://user-images.githubusercontent.com/47498552/111022472-f7f3a500-83f8-11eb-9f5c-6a26fe439347.PNG)

---

## **What are the toolkits we'll provide?!**

1.  ***[ML Algorithms source code](https://github.com/Dhaiwat10/healthcare-ai-ml/tree/main/ML%20models)***.

There are 4 ML models:

- Disease predictor
- Heart Failure Risk Prediction (Using Logisitic Regression)
- Heart Failure Risk Prediction (Using Random Forest)
- Survival Probability that varies with time for Lymphoma Cancer patients

## Survival Probability that vary with time [Timeline Approach]

- This model takes time t[in months] as an input and outputs a probability of survival at time t of patient with Stage III or Stage IV Lymphoma Cancer.

![Lymphoma Cancer Graph](https://github.com/Dhaiwat10/healthcare-ai-ml/blob/main/ML%20models/Images/Lymphoma.png)
- This model is trained on Lymphoma cancer patients dataset, It is trained using `Kaplan Meier Estimate` 
![Kaplan-Meier Estimate](https://github.com/Dhaiwat10/healthcare-ai-ml/blob/main/ML%20models/Images/kaplan-meier-formula.png)
- where t_i are the events observed in the dataset and d_i is the number of deaths at time t_i and n_i is the number of people who we know have survived up to time t_i.
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
- It also helps Doctors to point out certain factors that heavily impact the patient's condition. eg: In below figure, we can see that Age, Poverty-index and Pulse pressure have negative impact on patient's health, which means these factors are primaraly responsible for high risk scores.
![prediction explainer](https://github.com/Dhaiwat10/healthcare-ai-ml/blob/main/ML%20models/Images/Figure.png)
![2](https://github.com/Dhaiwat10/healthcare-ai-ml/blob/main/ML%20models/Images/Figure(1).png)
- With the help of this model, Doctors can sort patients based on their risk-scores/risk-probabilities.
- This can be helpful for doctors to prioritize a particular patient's treatment if his/her risk score is higher than other patients.
  


## Disease Predictor

- Disease predictor takes minimum 3 symptoms as an Input and outputs 3 most likely diseases along with their probabilities. 
- Sometimes Symptoms can be mis-interpreted by doctors, which leads to wrong treatments and medicines. This Predictor makes sure that No possibility of disease is overlooked!
- This model is trained on 5000 records which includes 41 unique diseases and 131 Symptoms. 
- After trying different approaches, Simple Artificial neural Network turned out to be the best.





## Tech

- [Keras](https://keras.io/) - To build Artificial neural network
- [lifelines](https://lifelines.readthedocs.io/en/latest/) - Python library for Medical & Survival data analysis
- [shap](https://shap.readthedocs.io/en/latest/index.html) - python library to visualize how machine learning algorithm made its prediction
- [Scikit-learn](https://scikit-learn.org/stable/) - To develop ML models and other analysis

2. ***[Website for the CareProviders](https://healthcare-ai-ml-careprovider-o7hqyb8jm-dhaiwat10.vercel.app/)***.

    - A Dashboard which outputs the Patient's results given by our API.
    - This website will be used by the hospitals and the clinics to operate CRUD operations of the patients data generated there.
    - Shows the past history of patient's diseases and the treatment done.
    - It will also give notify from the wrong treatment that can be given due to overlap of the previous diagnoses.

Basic Outllook:

![careprovidergif](https://user-images.githubusercontent.com/47498552/111022893-c9c39480-83fb-11eb-919b-6e6e1be96f92.gif)

3. ***[Website for the Intermidiaries](https://healthcare-ai-ml-careprovider-cqida9hbj-dhaiwat10.vercel.app/)***.

    - This will be useful for the Government / Insurance companies.
    - They can manage the money/resources from this website.
    - They can also provide a better insurance policy reccomendations based on Individual's PHR.
    - THere will be also a Internet banking and Blockchain implementation using [Matic](https://matic.network/) for the payment of patients bill.

Basic Outllook:

![insurancegif](https://user-images.githubusercontent.com/47498552/111023034-ab11cd80-83fc-11eb-9874-f2bd96a2a9ac.gif)


4.  ***[Implemented API with proper documentations](https://healthcare-ai-ml-careprovider-cqida9hbj-dhaiwat10.vercel.app/)***.
    
    - The API will interact with our ML models and our frontends.
    - The API will use Tensorflow.js to use the trained ML models to make predictions for different kinds of requests.
    - For the API, we are using Node, PostgreSQL and TypeScript.


