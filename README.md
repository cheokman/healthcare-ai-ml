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

We have *3* different alogorithms:

1. Prediction of the future diseases based on EHR.
2. Recomendation system for the intermidiaries to give precise 'insurance policy' based on PHR.
3. Prediction of future 'Survival Probability' for 'Lymphoma Cancer' patients.

Rather than using the traditional `matrix feature table` to train algorithms we've used a `Timeline` based approach.

### TimeLine Approach

- Rather than training a model based on the directly a tabular format what it does is first arrange the data in a sequence.
- By sequencing there will be less overlapping and ambigous results in the data set
- Which finlly leads to a more efficient algorithm.
    
