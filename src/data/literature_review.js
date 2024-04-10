import Attenton from "../assets/lr/attention_is_all_you_need.pdf";
import NPLM from "../assets/lr/nplm.pdf";
import NSR_CTC from "../assets/lr/nsr_using_cnn_ctc.pdf";
import ST_transformer from "../assets/lr/st_transformer_cslr.pdf";

const review_list = [
  {
    title: "Attention Is All You Need",
    tag: ["Transformers", "Machine Translation"],
    description:
      "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles, by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature. We show that the Transformer generalizes well to other tasks by applying it successfully to English constituency parsing both with large and limited training data.",
    review_link: Attenton,
    original_link: "https://arxiv.org/abs/1706.03762",
  },
  {
    title: "A Neural Probabilistic Language Model",
    tag: [
      "Statistical language modeling",
      "Artificial neural networks",
      "Distributed representation",
      "Curse of dimensionality",
    ],
    description:
      "A goal of statistical language modeling is to learn the joint probability function of sequences of words. This is intrinsically difficult because of the curse of dimensionality: we propose to fight it with its own weapons. In the proposed approach one learns simultaneously (1) a distributed representation for each word (i.e. a similarity between words) along with (2) the probability function for word sequences, expressed with these repre  sentations. Generalization is obtained because a sequence of words that has never been seen before gets high probability if it is made of words that are similar to words forming an already seen sentence. We report on experiments using neural networks for the probability function, showing on two text corpora that the proposed approach very significantly improves on a state-of-the-art trigram model.",
    review_link: NPLM,
    original_link:
      "https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf",
  },
  {
    title: "Nepali Speech Recognition Using CNN, GRU, and CTC",
    tag: [
      "Nepali Speech Recognition",
      "Automatic Speech Recognition",
      "Gated Recurrent Unit (GRU)",
      "Convolution Neural Network (CNN)",
    ],
    description:
      "Communication is an important part of life. To use communication technology efficiently we need to know how to use them or how to instruct these devices to perform tasks. Automatic speech recognition plays an important role in interaction with the technology. Nepali speech recognition involves in conversion of Nepali speech to its correct Nepali transcriptions. The purposed model consists of CNN, GRU and CTC network. The feature in the raw audio is extracted by using MFCC algorithm. CNN is for learning high level features. GRU is responsible for constructing the acoustic model. CTC is responsible for decoding. The dataset consists of 18 female speakers. It is provided by Open Speech and Language Resources. The build model can predict the with the WER of 11%.",
    review_link: NSR_CTC,
    original_link: "https://aclanthology.org/2020.rocling-1.23.pdf",
  },
  {
    title:
      "Spatial–temporal transformer for end-to-end sign language recognition",
    tag: [
      "Spatial–temporal encoder",
      "Continuous sign language recognition",
      "Transformer",
      "Patched image",
    ],
    description:
      "Continuous sign language recognition (CSLR) is an essential task for communication between hearing-impaired and people without limitations, which aims at aligning low-density video sequences with high-density text sequences. The current methods for CSLR were mainly based on convolutional neural networks. However, these methods perform poorly in balancing spatial and temporal features during visual feature extraction, making them difficult to improve the accuracy of recognition. To address this issue, we designed an end-to-end CSLR network: Spatial–Temporal Transformer Network (STTN). The model encodes and decodes the sign language video as a predicted sequence that is aligned with a given text sequence. First, since the image sequences are too long for the model to handle directly, we chunk the sign language video frames, i.e., ”image to patch”, which reduces the computational complexity. Second, global features of the sign language video are modeled at the beginning of the model, and the spatial action features of the current video frame and the semantic features of consecutive frames in the temporal dimension are extracted separately, giving rise to fully extracting visual features. Finally, the model uses a simple cross-entropy loss to align video and text. We extensively evaluated the proposed network on two publicly available datasets, CSL and RWTH-PHOENIX-Weather multi-signer 2014 (PHOENIX-2014), which demonstrated the superior performance of our work in CSLR task compared to the state-of-the-art methods.",
    review_link: ST_transformer,
    original_link:
      "https://link.springer.com/article/10.1007/s40747-023-00977-w#:~:text=Spatial%E2%80%93temporal%20transformer%20networks%20for%20sign%20language%20recognition&text=where%20X%2C%20Y%20represent%20the,Network%20(STTN)%20for%20CSLR.",
  },
  //
];

export default review_list