CREATE TABLE patient(
    id_patient INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_patient VARCHAR(80) NOT NULL,
    surname_patient VARCHAR(150) NOT NULL,
    email_patient VARCHAR(250) NOT NULL UNIQUE,
    tel_patient VARCHAR(80) NOT NULL UNIQUE,
    password_patient VARCHAR(255) NOT NULL,
    sex_patient VARCHAR(20) NOT NULL,
    address_patient VARCHAR(250) NOT NULL,
    ville_patient VARCHAR(250) NOT NULL,
    birthdate_patient DATE NOT NULL,
    UNIQUE index uni__ind__name__surname__patient(name_patient, surname_patient)
)
ENGINE = INNODB;


CREATE TABLE medicalnotebook (
    id_note INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_patient INT UNSIGNED NOT NULL,
    weight_note FLOAT,
    intelorance_note TEXT,
    height_note FLOAT,
    sickness_note TEXT,
    healthstate_note VARCHAR(150),
    bloodgroup_note VARCHAR(50),
    emergencycontact_note VARCHAR(80),
    permission_note BOOLEAN DEFAULT false,
    constraint fk_id_patient_mnb FOREIGN KEY (id_patient) REFERENCES patient(id_patient)
)
ENGINE = INNODB;



CREATE TABLE hospital(
    id_hospital INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_hospital VARCHAR(200) NOT NULL UNIQUE,
    town_hospital VARCHAR(200) NOT NULL,
    email_hospital VARCHAR(250) NOT NULL UNIQUE,
    tel_hospital VARCHAR(80) NOT NULL UNIQUE,
    password_hospital VARCHAR(255) NOT NULL
)
ENGINE = INNODB;


CREATE TABLE doctor(
    id_doctor INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_doctor VARCHAR(80) NOT NULL,
    surname_doctor VARCHAR(150) NOT NULL,
    email_doctor VARCHAR(250) NOT NULL UNIQUE,
    tel_doctor VARCHAR(80) NOT NULL UNIQUE,
    password_doctor VARCHAR(255) NOT NULL,
    UNIQUE index uni__ind__name__surname__doctor(name_doctor, surname_doctor)
)
ENGINE = INNODB;

CREATE Table consultation(
    id_consultation INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_doctor INT UNSIGNED NOT NULL,
    id_hospital INT UNSIGNED NOT NULL,
    id_note INT UNSIGNED NOT NULL,
    temperature_consultation VARCHAR (20) NOT NULL,
    bloodpressure_consultation VARCHAR(20) NOT NULL,
    date_consultation DATETIME DEFAULT now (),
    symptom_consultation TEXT NOT NULL,
    advice_consultation TEXT,
    constraint fk_id_note_consultation FOREIGN KEY (id_note) REFERENCES medicalnotebook(id_note),
    constraint fk_id_doctor_consultation FOREIGN KEY (id_doctor) REFERENCES doctor(id_doctor),
    constraint fk_id_hospital_consultation FOREIGN KEY (id_hospital) REFERENCES hospital(id_hospital)
)
ENGINE = INNODB;


CREATE TABLE analysis(
    id_analysis INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_consultation INT UNSIGNED NOT NULL,
    name_analysis VARCHAR(100) NOT NULL,
    result_analysis TEXT,
    constraint fk_id_consultation_analysis FOREIGN KEY (id_consultation) REFERENCES consultation(id_consultation)
)
ENGINE = INNODB;

CREATE TABLE prescription(
    id_prescription INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_consultation INT UNSIGNED NOT NULL,
    name_prescription VARCHAR(150) NOT NULL,
    posology_presciption VARCHAR(150) NOT NULL,
    constraint fk_id_consultation_prescription FOREIGN KEY (id_consultation) REFERENCES consultation(id_consultation)
)
ENGINE = INNODB;



CREATE TABLE demand(
    id_demand INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_hospital INT UNSIGNED NOT NULL,
    id_patient INT UNSIGNED NOT NULL,
    date_demand DATETIME DEFAULT now(),
    etat_demand BOOLEAN DEFAULT  false,
    constraint fk_id_hospital_demand FOREIGN KEY (id_hospital) REFERENCES hospital(id_hospital),
    constraint fk_id_patient_demand FOREIGN KEY (id_patient) REFERENCES patient(id_patient)   
)
ENGINE = INNODB;

CREATE TABLE intervenes(
    id_hospital int UNSIGNED NOT NULL,
    id_doctor INT UNSIGNED NOT NULL,
    state_intervenes BOOLEAN DEFAULT true,
    constraint fk_id_hospital_intervenes FOREIGN KEY (id_hospital) REFERENCES hospital(id_hospital),
    constraint fk_id_doctor_intervenes FOREIGN KEY (id_doctor) REFERENCES doctor(id_doctor),
    constraint pk_merge_id_doctor_id_hospital PRIMARY KEY (id_hospital, id_doctor)
)
ENGINE = INNODB;