import React from 'react'
import ReviewDisplay from '../component/reviewDisplay';

import Attenton from '../assets/lr/attention_is_all_you_need.pdf';
import NPLM from '../assets/lr/nplm.pdf'

function literatureReview() {
  const review_list = [
    {
      "title": "Attention Is All You Need",
      "tag": ["Transformers", "Machine Translation"],
      "description": "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles, by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature. We show that the Transformer generalizes well to other tasks by applying it successfully to English constituency parsing both with large and limited training data.", 
      "review_link": Attenton,
      "original_link" : "https://arxiv.org/abs/1706.03762",
    },
    {
      "title": "A Neural Probabilistic Language Model",
      "tag": ["Statistical language modeling", "artificial neural networks", "distributed representation",
"curse of dimensionality"],
      "description": "A goal of statistical language modeling is to learn the joint probability function of sequences of words. This is intrinsically difficult because of the curse of dimensionality: we propose to fight it with its own weapons. In the proposed approach one learns simultaneously (1) a distributed representation for each word (i.e. a similarity between words) along with (2) the probability function for word sequences, expressed with these repre  sentations. Generalization is obtained because a sequence of words that has never been seen before gets high probability if it is made of words that are similar to words forming an already seen sentence. We report on experiments using neural networks for the probability function, showing on two text corpora that the proposed approach very significantly improves on a state-of-the-art trigram model.",
      "review_link": NPLM,
      "original_link" : "https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf",
    }
  ];

  const displayReview = () => {
    let display = [];
    let result = [];

    review_list.map(review => {
      return display.push(
        <ReviewDisplay review={review} key={review.title} />)
    })

    for (let i = 0; i < review_list.length; i += 1) {
      result.push(
        <div className='project'>{display[i]}</div>
      )
    }
    console.log("result : ", result);
    return result;
  }

  return (
    <section>
      <div className='container pt-3'>
        <div className='row'>
          <h1>Literature Review</h1>
          <hr/>
          {review_list.length > 0 ? displayReview() : "No review"}
        </div>
      </div>
    </section>
  )
}

export default literatureReview


