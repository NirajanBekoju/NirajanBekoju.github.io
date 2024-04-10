import nepaliLM from "../assets/project_pdf/nepali_lm.pdf";
import FTD from "../assets/project_pdf/Fourier_transform_drawing.pdf";
import ATC_PRS from "../assets/project_pdf/Arxiv Topic Classification and Paper Recommendation SYSTEM.pdf";

const projectsList = [
  {
    title: "Nepali Language Processing",
    keywords: [
      "NLP",
      "Pytorch",
      "Tensorflow",
      "Word Embeddings",
      "Bert",
      "GPT2",
    ],
    description:
      "This project is built in order to explore the natural language processing field and understand the working of transformers and their uses to develop various cool projects like language models, text summarization, text classification and more. We have developed sentimental classification model, word vectors for nepali words, probabilistic language model and GPT2-based language model for nepali language in this project and the work is on going.",
    document_link: nepaliLM,
    github_link: "https://github.com/NirajanBekoju/Nepali-Language-Processing",
  },
  {
    title: "Arxiv-Topic-Classification-and-Paper-Recommendation-System",
    keywords: [
      "NLP",
      "Tensorflow",
      "Transformer",
      "Word Embeddings",
      "Django",
      "React",
    ],
    description:
      "In today’s information-rich world, scientific publications play a pivotal role in disseminating knowledge and advancing research across various disciplines. The exponential growth of digital repositories, such as arXiv, has made it increasingly challenging for researchers to keep up with the vast volume of available literature. To address this challenge, we propose a novel approach that harnesses the power of Kaggle datasets for arXiv paper topic classification and builds a robust recommendation system.",
    document_link: ATC_PRS,
    github_link:
      "https://github.com/NirajanBekoju/Arxiv-Topic-Classification-and-Paper-Recommendation-System",
  },

  {
    title: "Wine Quality Classification",
    keywords: [
      "Wine Quality",
      "Data Analysis",
      "Machine Learning",
      "Random Forest",
      "Django",
    ],
    description:
      "This machine learning project focused on predicting the quality of red wines based on their chemical properties. To achieve this, several preprocessing techniques were applied, including scaling using different methods and applying log and boxcox transformations. Exploratory data analysis was also performed to better understand the relationships between the features and the target variable. Several popular machine learning algorithms were then trained and compared, including logistic regression, SVM, random forest, decision trees, and boosting algorithms. Performance metrics such as accuracy, precision, recall, and F1 score were used to identify the best algorithm and preprocessing technique. The random forest model with id = 1 was found to be the most effective,            with a micro F1 score of 0.73.            Overall, this project highlights the importance of proper preprocessing techniques and algorithm            selection for developing an accurate and effective model for wine quality classification. The            findings have practical implications for industries such as wine production, where the ability to            predict wine quality could be invaluable.",

    document_link:
      "https://github.com/NirajanBekoju/Wine-Quality-Classification/blob/master/Report/main.pdf",
    github_link: "https://github.com/NirajanBekoju/Wine-Quality-Classification",
  },
  {
    title: "Fourier Transform Drawing",
    keywords: ["Fourier Series", "DFT", "Epicycles"],
    description:
      "Fourier series is an expansion of a periodic function in terms of an infinite sum of sines and cosines. Fourier series make use of the orthogonality relationships of the sine and cosine functions. With appropriate weights, one cycle or period of the summation can be made to approximate an arbitrary function in that interval. In mathematics, the discrete-time fourier transform (DTFT) is a form of Fourier analysis that is applicable to the sequence of values. The DTFT is often used to analyze samples of a continuous function. The term discrete-time refers to the fact that the transform operates on discrete data, often samples whose interval has units of time. In this program, we are going to use discrete fourier transform in order to generate the fourier series of the given discrete coordinate data. In mathematics, the discrete Fourier Transform (DFT) converts a finite sequence of equally-spaced samples of function into a same-length sequence of equal-spaced samples of the discrete-time fourier transform(DTFT), which is a complex valued function of frequency.",
    document_link: FTD,
    github_link: "https://github.com/NirajanBekoju/Fourier-Transform-Drawing",
  },
  {
    title: "Epidemic Modelling",
    keywords: [
      "SIR Model",
      "C++",
      "OpenGL",
      "Data Analysis",
      "Data Visualization",
    ],
    description:
      "(Compartmental Model in Epidemiology ) Epidemic modelling is the mathematical model to illustrate the spread of epidemic disease. We have use SIR model in order to study the epidemic disease transmission. SIR model is a compartmental model in epidemiology. In this model, the population is assigned to compartments with labels - for example :- S, I or R(SUSCEPTIBLE, INFECTIOUS or RECOVERED). People may progress between compartments.",
    document_link: "",
    github_link: "https://github.com/NirajanBekoju/Epidemic-Modelling",
  },
  {
    title: "Malignant and Benign Tumor Diagnosis",
    keywords: ["Tumor", "pandas", "seaborn", "sk-learn", "Keras"],
    description:
      "Using the dataset obtained from kaggle for malignant and benign tumor diagonosis, in this project a model is built to predict the type of tumor and obtained 97.902% validation accuracy using keras sequential model.",
    document_link: "",
    github_link:
      "https://github.com/NirajanBekoju/Malignant-and-Benign-Tumor-Diagnosis",
  },
];

export default projectsList;
