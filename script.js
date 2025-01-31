const questions = [
    
    {
        question: "The diagnosis of acute kidney injury is made when serum creatinine value is increased by ___",
        answers: [
        { text: "1.5 times of baseline value over 7 days", correct: true },
        { text: ">=0.3mg/dl from baseline within 7 days.", correct: false },
        { text: ">=0.5 mg/di from baseline within 48 hours.", correct: false },
        { text: "Urine volume", correct: false },
        ],
        },
        {
        question: "AKIN and RIFLE criteria are used to classify __ _",
        answers: [
        { text: "Acute kidney injury", correct: true },
        { text: "Chronic renal failure", correct: false },
        { text: "Acute glomerulonephritis", correct: false },
        { text: "Nephrotic syndrome", correct: false },
        ],
        },
        {
        question: "Anuria is defined as urine output of less than",
        answers: [
        { text: "50ml/day", correct: false },
        { text: "70ml/day", correct: false },
        { text: "80ml/day", correct: false },
        { text: "100ml/day", correct: true },
        ],
        },
        {
        question: "All of the following are causes of intrinsic AKI except?",
        answers: [
        { text: "Myeloma light chains", correct: false },
        { text: "Snake bite", correct: false },
        { text: "Rhabdomyolysis", correct: false },
        { text: "NSAIDs", correct: true },
        ],
        },
        {
        question: "A 48-year-old woman known case of rheumatoid arthritis since 10 years presents tothe OPD with headache, nausea, vomiting, generalized weakness, severe abdominal pain. She also complained of dark-colored urine since 3 days. On examination there was severe pallor and BP was found to be 180/120 mmHg. She is on phenacetin-caffeineaspirin combination painkiller for 10 years. A CT abdomen was done. The patient is most likely suffering from. __",
        answers: [
        { text: "Septic ATN(acute tubular necrosis)", correct: false },
        { text: "Chronic kidney disease", correct: true },
        { text: "NSAID-induced Kidney disease", correct: false },
        { text: "Uric acid nephropathy", correct: false },
        ],
        },
        {
        question: "A 38-year-old woman presents to the OPD with nausea, vomiting, fatigue, witholiguria for 3 days. On Investigations, urine osmolality was 800 mOsm/kg, urinary sodium 10meq/I, and BUN: Creatinine ratio was 20:1. What is the most likely diagnosis?",
        answers: [
        { text: "Pre-renal AKI", correct: true },
        { text: "Renal AKI", correct: false },
        { text: "Post renal AKJ", correct: false },
        { text: "Acute cortical necrosis", correct: false },
        ],
        },
        {
        question: "A 35-year-old sustained a crush injury. On investigation, his urine/plasma creatinine levels  were",
        answers: [
        { text: "Rhabdomyolysis", correct: true },
        { text: "Congestive heart failure", correct: false },
        { text: "Hepatorenal syndrome", correct: false },
        { text: "Hypovolemia", correct: false },
        ],
        },
        {
        question: "A 38-year old woman who is a known case of hypothyroidism since 8 years complains of proximal muscle weakness and pain for 3 days. She also complains of high colored urine. She gives a history of doing strenuous workouts since last week. Blood reports showed an increase in CPK·MB, high anion gap metabolic acidosis, and an increase in uric acid and serum creatinine. Which of the following can be seen in this patient?",
        answers: [
        { text: "Hypophosphatemia", correct: false },
        { text: "Hypomagnesemia", correct: false },
        { text: "Hypocalcemia", correct: true },
        { text: "Hypokalemia", correct: false },
        ],
        },
        {
        question: "A 54-year-old man presents to the OPD with nausea, vomiting, fatigue, with oliguria for 3 days.  He also complained of feeling drowsy and confused while working. On examination, swelling around the eyes and  both ankles was noticed. A diagnosis of AKI was made. He is unresponsive to fluid resuscitation and shows minimal improvement after hemodialysis. Lab results showed elevated serum free light chains and Bence Jones protein in the urine. What could be the possible cause of acute renal failure in this case?",
        answers: [
        { text: "Hypokalemia", correct: false },
        { text: "Hyperkalemia", correct: false },
        { text: "Hypercalcemia", correct: true },
        { text: "Hypocalcemia", correct: false },
        ],
        },
        {
        question: "Non-oliguric renal failure is most likely to be associated with ___ _",
        answers: [
        { text: "Aminoglycoside toxicity", correct: true },
        { text: "Contrast-induced nephropathy", correct: false },
        { text: "Congestive heart failure", correct: false },
        { text: "Post-streptococcal glomerulonephritis", correct: false },
        ],
        },
        {
        question: "A 47 year old electricity worker sustained an electrical injury. Following admission in the hospital, he developed arrhythmia. What could be the possible arterial blood gas finding in this patient?",
        answers: [
        { text: "HyperKalemic alkalosis", correct: false },
        { text: "Hypokalemic alkalosis", correct: false },
        { text: "Hyperkalemic acidosis", correct: true },
        { text: "Hypokalemic acidosis", correct: false },
        ],
        },
        {
        question: "A patient with acute renal failure symptoms came to the casualty. On arterial blood gas evaluation patient found to have metabolic acidosis. Metabolic acidosis in acute renal failure is due to",
        answers: [
        { text: "Decreased excretion of ammonia", correct: true },
        { text: "Loss of HC03", correct: false },
        { text: "Retention of C02 by lungs", correct: false },
        { text: "Increased production of protons", correct: false },
        ],
        },
        {
        question: "Which of the following is false regarding contrast-induced nephropathy?",
        answers: [
        { text: "It resolves within a week.", correct: false },
        { text: "N-acetyl cysteine can be used.", correct: false },
        { text: "Dialysis requiring AKI is very common.", correct: false },
        { text: "Hypoxia due to nephrotoxic agents is the cause.", correct: true },
        ],
        },
        {
        question: "A 50-year-old patient came with complaints of reduced urine output for the past 2days. Which of the following is not used as a marker to rule out kidney injury in this patient?",
        answers: [
        { text: "Osteopontin", correct: false },
        { text: "Cystatin", correct: false },
        { text: "Alanine aminopeptidase", correct: false },
        { text: "Acid phosphatase", correct: true },
        ],
        },
        {
        question: "Intravenous fluid preferred for hydration in pre-renal AKI (acute kidney injury) patients is",
        answers: [
        { text: "Hydroxyethyl starch", correct: false },
        { text: "Dextrans", correct: false },
        { text: "0.9% NaCl", correct: true },
        { text: "Albumin", correct: false },
        ],
        },
        {
        question: "Continuous renal replacement therapy (CRRT) is preferred in patients with ___",
        answers: [
        { text: "Severe hypotension", correct: true },
        { text: "HyperKalemia", correct: false },
        { text: "Metabolic acidosis", correct: false },
        { text: "uremic symptoms", correct: false },
        ],
        },
        {
        question: "Which of the following is not seen in tumour lysis syndrome",
        answers: [
        { text: "Hyperphosphatemia", correct: false },
        { text: "Hyperuricemia", correct: false },
        { text: "Hypercalcemia", correct: true },
        { text: "Hyperkalemia", correct: false },
        ],
        },
        {
        question: "Which among the following is a risk factor for chronic kidney disease (CKD)?",
        answers: [
        { text: "Childhood obesity", correct: false },
        { text: "Small for gestational age", correct: false },
        { text: "Structual abnormalities of urinary tract", correct: false },
        { text: "All of the above", correct: true },
        ],
        },
        {
        question: "The protein in the glomerular basement membrane responsible for charge-dependent filtration is?",
        answers: [
        { text: "Fibronectin", correct: false },
        { text: "Heparan sulfate", correct: true },
        { text: "Collagen Type IV", correct: false },
        { text: "Entactin", correct: false },
        ],
        },
        {
        question: "Which is the most common cause of CKD (chronic kidney disease)?",
        answers: [
        { text: "Diabetic nephropathy", correct: true },
        { text: "Glomerulonephritis", correct: false },
        { text: "Hypertension", correct: false },
        { text: "Autosomal dominant polycystic kidney disease", correct: false },
        ],
        },
        {
        question: "The most common cause of mortality in patients with chronic kidney disease (CKD) is",
        answers: [
        { text: "Cardiovascular disease", correct: true },
        { text: "Infection", correct: false },
        { text: "Uremia", correct: false },
        { text: "Anemia", correct: false },
        ],
        },
        {
        question: "Glomerulonephritis that is least likely to cause chronic renal failure is __",
        answers: [
        { text: "Post-streptococcal glomerulonephritis", correct: true },
        { text: "Membranous glomerulonephritis", correct: false },
        { text: "Membranoproliferative glomerulonephritis", correct: false },
        { text: "rocal segmental glomerulosclerosis", correct: false },
        ],
        },
        {
        question: "Which of the following parameter is not used in the staging of chronic kidney disease?",
        answers: [
        { text: "Albumin", correct: false },
        { text: "Estimated GFR", correct: false },
        { text: "Serum Creatinine", correct: true },
        { text: "Both a and b", correct: false },
        ],
        },
        {
        question: "At what stage do the symptoms of chronic kidney disease (CKD) start appearing?",
        answers: [
        { text: "Stage 1 D", correct: false },
        { text: "Stage 2", correct: false },
        { text: "Stage 3-4", correct: true },
        { text: "Stage 4-5", correct: false },
        ],
        },
        {
        question: "Clinical features of uremia usually appear when the GFR is reduced to less than:",
        answers: [
        { text: "50ml/min/1. 73 m2", correct: false },
        { text: "15ml min/1.73 m2", correct: true },
        { text: "40mlmin/ 1.73 m2", correct: false },
        { text: "30mlmin/1.73 m2", correct: false },
        ],
        },
        {
        question: "The pathophysiology underlying uremic syndrome involves all except",
        answers: [
        { text: "Accumulation of toxins", correct: false },
        { text: "Loss of kidney functions and hormone regulation", correct: false },
        { text: "Systemic inflammation", correct: false },
        { text: "Elevated levels of CRP and Fetuin", correct: true },
        ],
        },
        {
        question: "Chronic kidney disease (CKD) is associated with elevated levels of which among the  following?",
        answers: [
        { text: "Fibrinogen", correct: true },
        { text: "Fetuin", correct: false },
        { text: "Albumin", correct: false },
        { text: "Globulin", correct: false },
        ],
        },
        {
        question: "Which among the following is the predominant electrolyte abnormality encountered in an  advanced CKD patient?",
        answers: [
        { text: "Hypernatremia", correct: false },
        { text: "Hypokalemia", correct: false },
        { text: "Non-anion gap metabolic acidosis", correct: false },
        { text: "Increased anion gap metabolic acidosis", correct: true },
        ],
        },
        {
        question: "Which among the following is an electrolyte abnormality that is not observed in CRF (chronic  renal failure)?",
        answers: [
        { text: "Hypokalemia", correct: true },
        { text: "Hyperkalemia", correct: false },
        { text: "Hypocalcemia", correct: false },
        { text: "Hypophosphatemia", correct: false },
        ],
        },
        {
        question: "A patient with chronic kidney disease presents to the emergency with complaints of chest pain, shortness of breath and diaphoresis. Which of the following investigations is least useful in making diagnosis?",
        answers: [
        { text: "Cardiac troponin levels", correct: true },
        { text: "ECG", correct: false },
        { text: "Chest X-ray", correct: false },
        { text: "Echocardiography", correct: false },
        ],
        },
        {
        question: "A 60-year-old man with a history of diabetes for 20 years is now diagnosed with CKD and on dialysis for last few months. He presents with intense body pains, muscle pain, and history of fracture. On evaluation, his PTH level was found to be decreased and the calcium level was normal. He has been regularly taking oral vitamin D and calcium tablets. Which of the following diagnosis is most likely?",
        answers: [
        { text: "Osteomalacia", correct: false },
        { text: "Adynamic bone disease", correct: true },
        { text: "Osteitis fibrosa cystica", correct: false },
        { text: "Tumoral calcinosis", correct: false },
        ],
        },
        {
        question: "A patient with CKD (chronic kidney disease) is found to have normal kidney size on ultrasonography. The diagnosis which is LEAST likely is",
        answers: [
        { text: "Diabetic nephropathy", correct: false },
        { text: "HIV nephropathy", correct: false },
        { text: "Amyloidosis", correct: false },
        { text: "Hypertension-associated CKD", correct: true },
        ],
        },
        {
        question: "A 50-year old male patient who is on dialysis for 2 years, now complains of bone pain and tenderness and bowing of bone. On evaluation, a metabolic bone disease with hyperparathyroidism and hypophosphatemia was diagnosed. The initial treatment of choice in this patient could be?",
        answers: [
        { text: "Sevelamer", correct: true },
        { text: "Cinacalcet", correct: false },
        { text: "Pamidronate", correct: false },
        { text: "Calcitriol", correct: false },
        ],
        },
        {
        question: "A middle-aged woman with chronic kidney disease (CKD) presents to the OPD withexercise  intolerance, fatigue, and shortness of breath. On examination, she is found to have pallor. Which of the following is  least likely to be a cause for her physical findings?",
        answers: [
        { text: "Deficiency of erythropoietin", correct: false },
        { text: "Iron deficiency", correct: false },
        { text: "Hyperparathyroidism", correct: false },
        { text: "Sickle cell anemia", correct: true },
        ],
        },
        {
        question: "The best treatment for anemia in chronic kidney disease (CKD) patients is __",
        answers: [
        { text: "IV Iron sucrose", correct: false },
        { text: "Darbepoetin", correct: true },
        { text: "Blood transfusion", correct: false },
        { text: "Steroids", correct: false },
        ],
        },
        {
        question: "All of the following drugs can be used in a patient of CKD except",
        answers: [
        { text: "Ramipril", correct: false },
        { text: "Diclofenac", correct: true },
        { text: "Loop diuretics", correct: false },
        { text: "Insulin", correct: false },
        ],
        },
        {
        question: "In hypertensive patients with chronic kidney disease (CKD), the target blood pressure level to be achieved is less than ____",
        answers: [
        { text: "140/90 mm Hg", correct: false },
        { text: "140/80 mm Hg", correct: true },
        { text: "130/90mmHg", correct: false },
        { text: "120/80 mmHg", correct: false },
        ],
        },
        {
        question: "Which of the following tests is most sensitive for detecting early diabetic nephropathy?",
        answers: [
        { text: "Urine for microalbumin", correct: true },
        { text: "Renal ultrasound", correct: false },
        { text: "Creatinine clearance test", correct: false },
        { text: "Serum blood urea nitrogen level", correct: false },
        ],
        },
        {
        question: "A patient is on insulin and has CKD stage 4. The dose adjustment required for his insulin dosing is",
        answers: [
        { text: "No dose adjustment required", correct: false },
        { text: "Decreased insulin dose", correct: true },
        { text: "Increased insulin dose", correct: false },
        { text: "Add OPP 4 inhibitor", correct: false },
        ],
        },
        {
        question: "In CKD patients, the levels of all hormones increase except?",
        answers: [
        { text: "Insulin", correct: false },
        { text: "PTH", correct: false },
        { text: "Estrogen", correct: true },
        { text: "FGF 23", correct: false },
        ],
        },
        {
        question: "Which of the following is not a feature of chronic renal failure?",
        answers: [
        { text: "Hyperparathyroidism", correct: false },
        { text: "Hyperthyroidism", correct: true },
        { text: "Decreased vitamin D levels", correct: false },
        { text: "Osteomalacia", correct: false },
        ],
        },
        {
        question: "The most common neurological disorder observed in CKD is __ _",
        answers: [
        { text: "Dementia", correct: false },
        { text: "Restless leg syndrome", correct: false },
        { text: "Peripheral neuropathy", correct: true },
        { text: "Encephalopathy", correct: false },
        ],
        },
        {
        question: "All are true about restless legs syndrome (RLS) except __",
        answers: [
        { text: "More common in females", correct: false },
        { text: "Improved by movement", correct: false },
        { text: "Most common cause is chronic kidney disease", correct: true },
        { text: "Most common movement disorder in pregnancy", correct: false },
        ],
        },
        {
        question: "A patient of CKD develops convulsions. The most likely cause is:",
        answers: [
        { text: "Hypokalemia", correct: false },
        { text: "Hyperkalemia", correct: false },
        { text: "Hypercalcemia", correct: false },
        { text: "Water intoxication", correct: true },
        ],
        },
        {
        question: "Broad casts in urine examination is a diagnostic feature of",
        answers: [
        { text: "Chronic renal failure", correct: true },
        { text: "Acute renal failure", correct: false },
        { text: "Acute Glomerulonephritis", correct: false },
        { text: "Basement membrane disease", correct: false },
        ],
        },
        {
        question: "Anemia in chronic kidney disease (CKD) starts appearing in which stage?",
        answers: [
        { text: "1", correct: false },
        { text: "2", correct: false },
        { text: "3", correct: true },
        { text: "4", correct: false },
        ],
        },
        {
        question: "Which of the following renal cystic diseases has an autosomal recessive inheritance?",
        answers: [
        { text: "Tuberous sclerosis", correct: false },
        { text: "Medullary cystic kidney", correct: false },
        { text: "Nephronophthisis", correct: true },
        { text: "Von Hippel-lindau disease", correct: false },
        ],
        },
        {
        question: "All of the following are true about Autosomal Dominant Polycystic Kidney Disease (ADP KO) except?",
        answers: [
        { text: "Mutation of PKO 1 is responsible for of the cases", correct: false },
        { text: "PKO 2 mutation has higher risk of end 37 stage renal disease than PKO 1",
        correct: true },
        { text: "The PKO genes code for polycystins", correct: false },
        { text: "Cysts are formed only in 5% of the tubules of the kidney", correct: false },
        ],
        },
        {
        question: "Which of the following is true about clinical manifestations in autosomal dominant polycystic  kidney disease (ADPKD)?",
        answers: [
        { text: "ADPKD progresses to end stage renal disease in the early adulthood", correct: false
        },
        { text: "Most common kidney slone in ADPKD is calcium oxalate stones", correct:
        true },
        { text: "Renal cyst infections are seen rarely in patients with ADPKD", correct: false },
        { text: "Cardiovascular complications are a major cause of mortality in ADPKD", correct: false
        },
        ],
        },
        {
        question: "A 25 year old woman came with complaints of headache. She had no other I complaints. She gives a family history of both her father and paternal uncle having ADPKD and dying of a brain bleed. On examination, her blood pressure was found to be 140/100 mm Hg. Which of the following investigations would not be necessary for her?",
        answers: [
        { text: "Ultrasonography of the abdomen", correct: false },
        { text: "Contrast enhanced CT of the abdomen", correct: true },
        { text: "Non-contrast CT scan of the abdomen", correct: false },
        { text: "MR angiography of the cerebral vasculature", correct: false },
        ],
        },
        {
        question: "A 30-year-old male was diagnosed to have ADPKD. In this patient, cysts are least likely to be  present in which of the following sites?",
        answers: [
        { text: "Arachnoid", correct: false },
        { text: "Lungs", correct: true },
        { text: "Pancreas", correct: false },
        { text: "Seminal vesicles", correct: false },
        ],
        },
        {
        question: "The type of renal cell carcinoma seen in association with ADPKD is __ _",
        answers: [
        { text: "Clear cell type", correct: false },
        { text: "Papillary cell type", correct: false },
        { text: "Chromophobe type", correct: false },
        { text: "Sarcomatoid type", correct: true },
        ],
        },
        {
        question: "A 45-year old male presents with bilateral flank pain, gross hematuria. He has a family history  of autosomal polycystic kidney disease. How many cysts should be present in the kidneys to diagnose him wit ADPKD?",
        answers: [
        { text: "At least 2 cysts in each kidney", correct: true },
        { text: "At least 3 cysts in each kidney", correct: false },
        { text: "At least 4 cysts in each kidney", correct: false },
        { text: "Even a single cy5t in each kidney", correct: false },
        ],
        },
        {
        question: "A 60 year old diabetic man came with complaints of flank pain. His blood pressure was 150/100  mm Hg. A USG was ordered and the kidney showed the following findings. His family history is significant for a  kidney disease that follows autosomal dominant inheritance. Which of the following is not a treatment option for this  patient?",
        answers: [
        { text: "Physiotherapy", correct: false },
        { text: "Angiotensin-converting enzyme inhibitors", correct: false },
        { text: "Surgical decompression cysts", correct: true },
        { text: "Tolvaptan", correct: false },
        ],
        },
        {
        question: "A 24-year-old G2 P1 LO, with a history of 26 weeks of amenorrhoea came for an ANC checkup.  On examination, her abdominal girth was less for gestational age and the fetal parts were easily palpable. She is in a  consanguineous marriage and the records from the previous pregnancy show that the deceased infant was positive for  mutation in the PKHD1 gene. Which of the following statements are correct for this clinical scenario?",
        answers: [
        { text: "ARPKD is commonly an asymptomatic and mild disease", correct: false },
        { text: "In severe cases, ARPKD can be diagnosed antenatally with a USG", correct:
        true },
        { text: "Respiratory insufficiency rs uncommon in a newborn with AKl-'KU", correct: false
        },
        { text: "ARPKD is commonly diagnosed at years of age", correct: false },
        ],
        },
        {
        question: "In a patient diagnosed with Autosomal Recessive Polycystic Kidney Disease (ARPKD), which of  the following is not a typically seen feature?",
        answers: [
        { text: "Biliary dysgenesis", correct: false },
        { text: "Portal hypertension", correct: false },
        { text: "Caroli disease", correct: false },
        { text: "Hepatic cysts", correct: true },
        ],
        },
        {
        question: "Which of the following are matched correctly? (A) Medullary cystic kidney disease-1 (MCKD 1)·  MUC1 gene (B) Medullary cystic kidney disease- 2 (MCKD 2)· MUC 2 gene (C) Juvenile nephronophthisis· UMOD gene (D) Autosomal recessive polycystic kidney disease (ARPKD)· PKHD1 gene",
        answers: [
        { text: "A and B", correct: false },
        { text: "B and C", correct: false },
        { text: "A and D", correct: true },
        { text: "A and C", correct: false },
        ],
        },
        {
        question: "The most common inherited cause of kidney failure in childhood is",
        answers: [
        { text: "Medullary sponge kidney", correct: false },
        { text: "Nephronophthisis", correct: true },
        { text: "Medullary cystic kidney disease", correct: false },
        { text: "Autosomal Recessive Polycystic Kidney Disease", correct: false },
        ],
        },
        {
        question: "Joubert syndrome is related to which of the following conditions?",
        answers: [
        { text: "Juvenile nephronophthisis", correct: true },
        { text: "Medullary cystic kidney disease", correct: false },
        { text: "Medullary sponge kidney", correct: false },
        { text: "Autosomal Recessive Polycystic Kidney Disease", correct: false },
        ],
        },
        {
        question: "A 31·year·old woman came with complaints of right sided colicky pain. USG showed mild  hydronephrosis on the right side I and a lower ureteric stone. She gives a history of recurrent urinary tract infections and intermittent hematuria in the past. The IVP image is given image below. What is the diagnosis?",
        answers: [
        { text: "Medullary cystic kidney disease", correct: false },
        { text: "Medullary sponge kidney", correct: true },
        { text: "Senior loken syndrome", correct: false },
        { text: "Infantile nephronopllthisis", correct: false },
        ],
        },
        {
        question: "All are true about karyomegalic interstitial nephritis except?",
        answers: [
        { text: "Adult onset progressive kidney failure", correct: false },
        { text: "Autosomal dominant disorder due to mutation in FAN1 gene", correct: true
        },
        { text: "Kidney biopsy shows karyomegaly", correct: false },
        { text: "None of the above", correct: false },
        ],
        },
        {
        question: "Which of the following is not an absolute indication of dialysis?",
        answers: [
        { text: "Asterisks", correct: false },
        { text: "Pericarditis", correct: false },
        { text: "Uremic bleeding", correct: false },
        { text: "Hyperkalaemia", correct: true },
        ],
        },
        {
        question: "Which of the following is the most commonly used therapeutic modality for end-stage renal disease?",
        answers: [
        { text: "Hemodialysis", correct: true },
        { text: "Renal transplant", correct: false },
        { text: "CAPO (Continuous ambulatory peritoneai dialysis)", correct: false },
        { text: "CCPD(Continuous Cycling Peritoneal Dialysis)", correct: false },
        ],
        },
        {
        question: "All of the following are correct regarding hemodialysis except?",
        answers: [
        { text: "Preferred site for fistula or grafts is forearm", correct: false },
        { text: "Access of choice is radiocephalic AV fistula", correct: false },
        { text: "Most common complication of A.Y grafts is infection", correct: true },
        { text: "Fistulas have higher long term patency rates", correct: false },
        ],
        },
        {
        question: "True about hemodialysis is all except?",
        answers: [
        { text: "Dialysers are made up of cellulose membranes", correct: true },
        { text: "Buffer used is bicarbonate", correct: false },
        { text: "Glutaraldehyde is used as reprocessing agent", correct: false },
        { text: "Urea is cleared more efficiently than creatinine", correct: false },
        ],
        },
        {
        question: "What is value of the blood flow (mL/min) in the hemodialysis machine?",
        answers: [
        { text: "150-250", correct: false },
        { text: "200-300", correct: false },
        { text: "250-450", correct: true },
        { text: "500-800", correct: false },
        ],
        },
        {
        question: "The adequacy of dialysis is determined by ___ _",
        answers: [
        { text: "Urea reduction ratio", correct: true },
        { text: "Blood Ureaicreatinine ratio", correct: false },
        { text: "Urinary protein/ creatinine ratio", correct: false },
        { text: "Creatinine reduction ratio", correct: false },
        ],
        },
        {
        question: "The agent most commonly implicated in causing dialysis-induced hypotension I is",
        answers: [
        { text: "Bicarbonate", correct: false },
        { text: "Aluminium", correct: false },
        { text: "Acetate", correct: true },
        { text: "Phosphate", correct: false },
        ],
        },
        {
        question: "The most common acute complication of hemodialysis is ___",
        answers: [
        { text: "Anaphylaxis", correct: false },
        { text: "Dialysis disquillibrium syndrome", correct: false },
        { text: "Hypotension", correct: true },
        { text: "Infection", correct: false },
        ],
        },
        {
        question: "A 50-year-old came with complaints of reduced urine output. On examination, I the patient is found to have CKD Stage 5 and taken for dialysis. During dialysis patient experienced hypotension episode. Which of the following cannot prevent dialysisassociated hypotension?",
        answers: [
        { text: "Warming the dialysate before dialysis", correct: true },
        { text: "Withholding anti hypertensives", correct: false },
        { text: "Avoiding heavy meals during dialysis", correct: false },
        { text: "Careful dry weight evaluation", correct: false },
        ],
        },
        {
        question: "A 67-year-old patient is diagnosed to have CKD and was started on dialysis. I Afterthe dialysis  session, he developed loss of consciousness and soon he developed seizures. What could be the possible cause in this  scenario?",
        answers: [
        { text: "Hypotension", correct: false },
        { text: "Aluminium toxicity", correct: false },
        { text: "Anaphylaxis", correct: false },
        { text: "Reverse urea effect", correct: true },
        ],
        },
        {
        question: "True statement about anaphylaxis associated with hemodialysis is",
        answers: [
        { text: "Occurs due to lack of cellulose in the membranes", correct: false },
        { text: "Ethylene oxide is the cause of Type B reaction", correct: false },
        { text: "Dialysis is discontinued in type A reaction", correct: true },
        { text: "Type A reaction associated With complement activation", correct: false },
        ],
        },
        {
        question: "A patient started on hemodialysis following kidney injury. Which of the following is the least  likely acute complication can occur?",
        answers: [
        { text: "Hypotension", correct: false },
        { text: "Dialysis disequillibrium syndrome", correct: false },
        { text: "Anaphylactoid reaction", correct: false },
        { text: "Amyloidosis", correct: true },
        ],
        },
        {
        question: "Amyloid protein in dialysis-associated amyloidosis is----.",
        answers: [
        { text: "AL", correct: false },
        { text: "Amyloid beta", correct: false },
        { text: "Amyloid beta 2", correct: true },
        { text: "Amyloid transthyretin", correct: false },
        ],
        },
        {
        question: "A 60-year-old male patient was started on dialysis. All of the following symptoms I improve with dialysis except",
        answers: [
        { text: "Pulmonary edema", correct: false },
        { text: "Metabolic acidosis", correct: false },
        { text: "Uremic gastritis", correct: false },
        { text: "Renal osteodystrophy", correct: true },
        ],
        },
        {
        question: "A CKD Stage 5 patient was on dialysis for the past one year. Later the patient started developing  complications and died. The most common complication in a chronic dialysis patient leading to death is _",
        answers: [
        { text: "Cardiovascular", correct: true },
        { text: "Electrolyte abnormality", correct: false },
        { text: "Metabolic acidosis", correct: false },
        { text: "Encephalopathy", correct: false },
        ],
        },
        {
        question: "In peritoneal dialysis, how much of fluid is infused into the peritoneum?",
        answers: [
        { text: "1.5-3 L", correct: true },
        { text: "3-4 L", correct: false },
        { text: "3-6 L", correct: false },
        { text: "5-8 L", correct: false },
        ],
        },
        {
        question: "The most common cause of peritonitis in peritoneal dialysis patient is-----.",
        answers: [
        { text: "Gram-positive bacilli", correct: true },
        { text: "Gram-positive bacilli", correct: false },
        { text: "Gram-negative bacilli", correct: false },
        { text: "Gram-negative bacilli", correct: false },
        ],
        },
        {
        question: "All of the following are complications of peritoneal dialysis except",
        answers: [
        { text: "Residual uremia", correct: false },
        { text: "Metabolic disturbances", correct: false },
        { text: "Insulin resistance", correct: false },
        { text: "Weight loss", correct: true },
        ],
        },
        {
        question: "A 50-year-old male patient underwent Renal transplantation. Which of the following is not true  about renal transplant?",
        answers: [
        { text: "ABO and HLA mismatch is absolute contraindication", correct: false },
        { text: "HIV and hepatitis in donor is contraindication for renal transplant", correct: false },
        { text: "Complications of transplant in donor include hypertension and FSGS", correct: false
        },
        { text: "Most common cause of death after renal transplant is infections", correct:
        true },
        ],
        },
        {
        question: "True about rejection after kidney transplant are all except:",
        answers: [
        { text: "Acute rejection is type 4 and type hypersensitivity reaction", correct: false },
        { text: "Hyperacute rejection is type 2 hypersensitivity reaction", correct: false },
        { text: "Induction therapy for prophylaxis of rejection is cyclosporine, azathioprine, prednisolone.", correct: true },
        { text: "Alemtuzumab is monoclonal antibody against CD 52", correct: false },
        ],
        },
        {
        question: "The most common cause of infection in 1- 6 months of renal transplant is -----.",
        answers: [
        { text: "Candida", correct: false },
        { text: "Pneumocystis", correct: false },
        { text: "BK virus ", correct: false },
        { text: "Cytomegalo virus", correct: true },
        ],
        },
        {
        question: "Which of the following lesions does not recurn the transplanted kidney?",
        answers: [
        { text: "Diabetic nephropathy", correct: false },
        { text: "Membranous GN", correct: false },
        { text: "Lupus nephritis", correct: false },
        { text: "Alports syndrome", correct: true },
        ],
        },
        {
        question: "The disease that recurs most often in post-renal transplant kidney is",
        answers: [
        { text: "Lupus nephritis", correct: false },
        { text: "Diabetic nephropathy", correct: false },
        { text: "Membrane proliferative glomeru lonephritis", correct: true },
        { text: "Membranous glomerulonephritis", correct: false },
        ],
        },
        {
        question: "Life expectancy after living donor kidney transplant is",
        answers: [
        { text: "10 years", correct: false },
        { text: "14 years", correct: true },
        { text: "16 years", correct: false },
        { text: "20 years", correct: false },
        ],
        },
        {
        question: "The type of acidosis seen in RTA (Renal tubular acidosis) is",
        answers: [
        { text: "Normal anion gap hyperchloermic metabolic acidosis.", correct: true },
        { text: "High anion gap hyperchloermic metabolic20.5% acidosis", correct: false },
        { text: "Normal anion gap hypochloremic metabolic acidosis", correct: false },
        { text: "High anion gap hypochloremic metabolic 8.73% acidosis.", correct: false },
        ],
        },
        {
        question: "The most common type of renal tubular acidosis (RTA) is __",
        answers: [
        { text: "Type 1", correct: false },
        { text: "Type 2", correct: false },
        { text: "Type 3", correct: false },
        { text: "Type 4", correct: true },
        ],
        },
        {
        question: "True about Type IV RTA (Renal tubular acidosis) is all except",
        answers: [
        { text: "Most common cause of Type JV RTA is diabetics", correct: false },
        { text: "Type IV RTA is found in patients with obstructive uropathy and interstitial renal diseases",
        correct: false },
        { text: "It can be congenital or acquired", correct: true },
        { text: "It is also known as hyporeninemic hyperaldosteronism", correct: false },
        ],
        },
        {
        question: "A patient of Chronic kidney disease came to the emergency room with complaintsoliguria and dizziness. On evaluation, GFR of 20-50ml/min, ABG shows acidosis picture, Serum potassium is elevated. In which Renal tubular acidosis the patient could be in?",
        answers: [
        { text: "Type I RTA", correct: false },
        { text: "Type II RTA", correct: false },
        { text: "Type IIIRTA", correct: false },
        { text: "Type IVRTA", correct: true },
        ],
        },
        {
        question: "A 60-year-old male patient who is a known case of CKD came with complaints of dehydrated feeling, thirst, anorexia and Hypotonia. On detailed evaluation patient diagnosed with type 1 RTA. Which of the following is not a feature of type RTA (renal tubular acidosis)?",
        answers: [
        { text: "Nephrocalcinosis", correct: false },
        { text: "Hypokalemia", correct: false },
        { text: "Urinary pH after acid loading is <5.5", correct: true },
        { text: "Renal rickets", correct: false },
        ],
        },
        {
        question: "The type of stone which is found in distal renal (tubular acidosis?",
        answers: [
        { text: "Uric acid", correct: false },
        { text: "Citrate", correct: false },
        { text: "Cystine", correct: false },
        { text: "Calcium phosphate", correct: true },
        ],
        },
        {
        question: "Which of the following statements about RTA (Renal tubular acidosis) type II is nottrue?",
        answers: [
        { text: "Majority cases are found in context of Fanconi's syndrome.", correct: false },
        { text: "Lowe syndrome causes RTA type II.", correct: false },
        { text: "Renal stones is a feature of RTA Type II.", correct: true },
        { text: "Minimum urinary pH is <5.5", correct: false },
        ],
        },
        {
        question: "Which is not a feature of Lowe's syndrome?",
        answers: [
        { text: "Glaucoma", correct: false },
        { text: "Cataract", correct: false },
        { text: "Hypertonia", correct: true },
        { text: "Intellectual disability", correct: false },
        ],
        },
        {
        question: "A patient diagnosed with a channelopathy called Dent's disease will be having all ofthe following  except",
        answers: [
        { text: "Affects males more than females.", correct: false },
        { text: "Inactivating mutation of chloride channel", correct: false },
        { text: "Recurrent Kidney stones", correct: false },
        { text: "Distal renal tubular defect", correct: true },
        ],
        },
        {
        question: "All of the following are causes of RTA (renal tubular acidosis) type II except",
        answers: [
        { text: "Wilson's disease", correct: false },
        { text: "Galactosemia", correct: false },
        { text: "Hereditary fructose intolerance", correct: false },
        { text: "Medullary sponge kidney", correct: true },
        ],
        },
        {
        question: "A 45-year-old male patient complaints about recurrent back pain. On x-ray of spine rugger jersey appearance was noticed. In which type of renal tubular acidosis (RTA) the given clinical condition can occur?",
        answers: [
        { text: "Type I", correct: false },
        { text: "Type II", correct: false },
        { text: "Type III", correct: true },
        { text: "Type IV", correct: false },
        ],
        },
        {
        question: "A urine sample of a patient has been collected for analysis. It should be analyzedwithin--",
        answers: [
        { text: "6-8 hours", correct: false },
        { text: "2-4 hours", correct: true },
        { text: "4-6 hours", correct: false },
        { text: " 1-2 hours", correct: false },
        ],
        },
        {
        question: "All of the following determine the colour of urine except",
        answers: [
        { text: "Chemical content", correct: false },
        { text: "Concentration", correct: false },
        { text: "pH", correct: false },
        { text: "Solubility of solutes", correct: true },
        ],
        },
        {
        question: "A urine examination revealed an abnormal green colour. Which among the following drugs is the likely culprit?",
        answers: [
        { text: "Triamterene", correct: true },
        { text: "Rifampicin", correct: false },
        { text: "Desferoxamine", correct: false },
        { text: "lmipenem", correct: false },
        ],
        },
        {
        question: "A patient came to the hospital with complaint of abdominal pain. Routine investigations were  unremarkable. On observation, the urine turned black on standing.  Which of the following enzymes is likely to be defective in this patient?  ",
        answers: [
        { text: "Homogentisate oxidase", correct: true },
        { text: "Xanthine oxidase", correct: false },
        { text: "Phenylalanine hydroxylase", correct: false },
        { text: "Dihydro oratate dehydrogenase", correct: false },
        ],
        },
        {
        question: "Isosthenuria is defined as specific gravity of __ _",
        answers: [
        { text: "1 020", correct: false },
        { text: "1.010", correct: true },
        { text: "1.015", correct: false },
        { text: "1.025", correct: false },
        ],
        },
        {
        question: "A patient presents with high coloured urine. A urine dipstick test done was negative. Which among the following conditions is most likely? ",
        answers: [
        { text: "Myoglobinuria", correct: false },
        { text: "Haemoglobinuria", correct: false },
        { text: "Porphyria", correct: true },
        { text: "Urolithiasis", correct: false },
        ],
        },
        {
        question: "Which of the following is true about significant hematuria?",
        answers: [
        { text: "RBC >3/HPF on >2 occasions", correct: false },
        { text: "RBC >100/HPF on 1 occasion", correct: true },
        { text: "RBC > 10/HPF on 1 occasion", correct: false },
        { text: "RBC >3/HPF on 1 occasion", correct: false },
        ],
        },
        {
        question: "A patient comes with complaints of hematuria, generalized edema and abdominal  distension. The doctor provisionally diagnosed the condition as a glomerular pathology.  What could be the possible urine finding? ",
        answers: [
        { text: "Bright red cells", correct: false },
        { text: "Dysmorphic RBCs", correct: true },
        { text: "Beta 2 microglobulin", correct: false },
        { text: "Normal MCV", correct: false },
        ],
        },
        {
        question: "An 18-year-old man presents to the clinic with a non-specific history of malaise. Mild sensorineural hearing loss had been diagnosed during his early education, although hearing aids were not required. He gives a history of recurrent hematuria and current investigations reveal the same. What is the most likely diagnosis among the following? ",
        answers: [
        { text: "Fanconrs anemia", correct: false },
        { text: "Alport syndrome", correct: true },
        { text: "Autosomal dominant polycystic kidney", correct: false },
        { text: "lgA nephropathy", correct: false },
        ],
        },
        {
        question: "Glomerular proteinuria is differentiated from non glomerular proteinuria by",
        answers: [
        { text: "Proteinuria <1 g/day", correct: false },
        { text: "Type of protein excreted is β2-microglobulin", correct: false },
        { text: "Albumin: β2-microglobulin ratio is 100:1", correct: false },
        { text: "Absence of NAG (N-acetyl glucosaminidase)", correct: true },
        ],
        },
        {
        question: "Which of the following is true about proteinuria?",
        answers: [
        { text: "Protein is normally excreted in urine and mainly albumin", correct: false },
        { text: "Normal range proteinuria is <500 mg", correct: false },
        { text: "Nephrotic range albuminuria is >2.5 g/day", correct: true },
        { text: "Heavy Proteinuria is> 5 g/day", correct: false },
        ],
        },
        {
        question: "A patient presents with recurrent kidney stones. The microscopic examination of urine is shown below. What is the type of stone seen in this patient?",
        answers: [
        { text: "Struvite", correct: false },
        { text: "Oxalate", correct: false },
        { text: "Uric acid", correct: false },
        { text: "Cystine", correct: true },
        ],
        },
        {
        question: "All statements are true about casts in urine except __",
        answers: [
        { text: "Width of cast depends on the size of tubule in which it is formed", correct: false },
        { text: "Casts in urine are specific to kidneys", correct: false },
        { text: "Site of formation is proximal convoluted tubule", correct: true },
        { text: "Casts are made up of Tam-horsfall protein", correct: false },
        ],
        },
        {
        question: "A patient with a fungal infection was started on amphotericin B. Within a few days he started complaining about decreased urine output. On examination, it revealed muddy brown casts in urine. What could be the possible diagnosis? ",
        answers: [
        { text: "Mycotoxic nephropathy", correct: false },
        { text: "Acute tubular necrosis", correct: true },
        { text: "Intersitial nephritis", correct: false },
        { text: "Chronic renal failure", correct: false },
        ],
        },
        {
        question: "Which among the following casts are associated with a poor prognosis?",
        answers: [
        { text: "Epithelial cast", correct: false },
        { text: "WBC cast", correct: false },
        { text: "Hyaline Cast", correct: false },
        { text: "Broad cast", correct: true },
        ],
        },
        {
        question: "True statement about renal vein thrombosis is",
        answers: [
        { text: "Right renal vein is more commonly involved", correct: false },
        { text: "Most common cause in children is nephritic syndrome", correct: false },
        { text: "Investigation of choice is Doppler ultrasound of renal vein", correct: false },
        { text: "Most common cause in elderly is renal cell carcinoma", correct: true },
        ],
        },
        {
        question: "A 10-year-old child develops hematuria after 2 days of diarrhea. Peripheral smear shows fragmented RBCs and thrombocytopenia. Ultrasound reveals the enlargement of both the kidneys. The likely diagnosis is",
        answers: [
        { text: "Renal vein thrombosis", correct: true },
        { text: "Hemolytic uremic syndrome", correct: false },
        { text: "Acute pyelonephritis", correct: false },
        { text: "Disseminated intravascular coagulation", correct: false },
        ],
        },
        {
        question: "The most common cause of clinically significant renal artery stenosis is",
        answers: [
        { text: "Hypertensive Nephrosclerosis", correct: false },
        { text: "Atherosclerosis", correct: true },
        { text: "Fibromuscular dysplasia", correct: false },
        { text: "Hyperthyroidism", correct: false },
        ],
        },
        {
        question: "A 35-year-old woman came with a headache and decreased urine output. On examination her BP was 150/90mmhg and abdominal bruits were heard. Renal angiography was done. Which of the following statements is not true regarding the condition shown in the image given below:",
        answers: [
        { text: "Most common site of involvement is renal artery", correct: false },
        { text: "Predominantly affects females", correct: true },
        { text: "Most commonly affected peripheral artery is subclavian artery", correct: false },
        { text: "Segmental, non-atheromatous dysplastic angiopathy", correct: false },
        ],
        },
        {
        question: "Most common cause of hemolytic uremic syndrome in India is",
        answers: [
        { text: "E.coli 0157 H7", correct: false },
        { text: "Shigella dysenteriae type I", correct: true },
        { text: "Streptococcus pneumonia", correct: false },
        { text: "Autoimmunity", correct: false },
        ],
        },
        {
        question: "A 56-year-old woman suffers from sudden onset of headache and photophobia. On I  examination, she is disoriented and has fever. CBC shows hemoglobin of 11.2 g/dl, platelet count of 32,000/ul.  Peripheral smear of the patient is shown in the image. The serum creatinine is 3.9 mg/dm and BUN (blood urea  nitrogen ) is 38 mg/di. Which of the following statements is not true regarding this disease?",
        answers: [
        { text: "Cause of the disease is ADAM TS-13 deficiency/defect", correct: false },
        { text: "20% patients will have falsely positive RA factor", correct: false },
        { text: "Mitomycin-C can also cause this disease", correct: false },
        { text: "Mainstay of treatment is blood transfusion", correct: true },
        ],
        },
        {
        question: "True about hemolytic uremic syndrome (HUS) is all except",
        answers: [
        { text: "Symptoms and signs of HUS develops as diarrhea begins to improve", correct: false
        },
        { text: "Only supportive managment of acute renal failure is done in typical HUS", correct:
        false },
        { text: "Eculizumab improves MAHA( microangiopathic hemolytic anemia} picture in atypical HUS",
        correct: false },
        { text: "Anemia in HUS is Coomb's test positive", correct: true },
        ],
        },
        {
        question: "A 50-year-old obese male patient who is a known case of ischaemic heart disease I came to the  OPD with complaints of abdominal pain, headache, and vomiting. On examination, his BP was 150/100 mmHg.Renal  biopsy reveals microvessel occlusion with cholesterol crystals. All of the following statements are true about the  clinical condition except?",
        answers: [
        { text: "More common in males", correct: false },
        { text: "Strongly associated with aortic aneurysmal disease and renal artery stenosis", correct:
        false },
        { text: "Transient eosinophilia", correct: false },
        { text: "Normal complement levels", correct: true },
        ],
        },
        {
        question: "A patient with uncontrolled hypertension and creatinine- 4.5 mg/dL was found to have unequal  sized kidneys. Renal USG shows right kidney 9cm and left kidney 7cm in size. There was no evidence of any  obstruction. The investigation of choice for the patient is --",
        answers: [
        { text: "Isotope renogram", correct: true },
        { text: "MR angiography", correct: false },
        { text: "Retrograde pyelography", correct: false },
        { text: "I V P", correct: false },
        ],
        },
        {
        question: "The most common cause of renal artery stenosis in a young female is __ _",
        answers: [
        { text: "Atherosclerosis", correct: false },
        { text: "Fibromuscular dysplasia", correct: true },
        { text: "Giant cell arteritis", correct: false },
        { text: "TaKayasu arteritis", correct: false },
        ],
        },
      
]







const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    backButton.innerHTML = "Back";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
backButton.style.display = "none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
    backButton.style.display = "inline";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "inline"
    backButton.style.display = "inline"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

function handlebackButton(){
  currentQuestionIndex--;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  } else { showScore()}
}

backButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length) {
  handlebackButton();
  } else{
      startQuiz();
  }
});
startQuiz();