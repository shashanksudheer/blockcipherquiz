import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import QuizEnd from './QuizEnd';

const QuizWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid #616A94;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #616A94;
        }
    }
`;

const Question = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const questions = [
    {
        question: "What type of device would you want secured?",
        options: [
            {
                answer: "Low computing resources (resource-constrained)",
                points: {
                    DES: 0,
                    AES: 100,
                    SIMON: 100,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 100,
                    Blowfish: 100
                }
            },
            {
                answer: "High computing power/resources (unrestrained)",
                points: {
                    DES: 100,
                    AES: 100,
                    SIMON: 0,
                    TDES: 100,
                    IDEA: 100,
                    Serpent: 0,
                    Blowfish: 100
                }
            },
        ], // end options
    },

    {
        question: "Is having the industry standard the most important for you?",
        options: [
            {
                answer: "Yes",
                points: {
                    DES: 100,
                    AES: 300,
                    SIMON: 0,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 0,
                    Blowfish: 0
                }
            },
            {
                answer: "No",
                points: {
                    DES: 0,
                    AES: 0,
                    SIMON: 200,
                    TDES: 0,
                    IDEA: 200,
                    Serpent: 200,
                    Blowfish: 200
                }
            },
        ], // end options
    },

    {
        question: "Do you need a cipher that offers customizability for key sizes?",
        options: [
            {
                answer: "Yes",
                points: {
                    DES: 0,
                    AES: 200,
                    SIMON: 200,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 200,
                    Blowfish: 200
                }
            },
            {
                answer: "No",
                points: {
                    DES: 0,
                    AES: 0,
                    SIMON: 0,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 0,
                    Blowfish: 0
                }
            },
        ], // end options
    },

    {
        question: "Is the speed of encryption/decryption important for your application?",
        options: [
            {
                answer: "Yes",
                points: {
                    DES: 100,
                    AES: 200,
                    SIMON: 150,
                    TDES: 0,
                    IDEA: 250,
                    Serpent: 200,
                    Blowfish: 100
                }
            },
            {
                answer: "No",
                points: {
                    DES: 0,
                    AES: 0,
                    SIMON: 0,
                    TDES: 100,
                    IDEA: 0,
                    Serpent: 0,
                    Blowfish: 0
                }
            },
        ], // end options
    },

    {
        question: "What block size fits your application needs?",
        options: [
            {
                answer: "64",
                points: {
                    DES: 300,
                    AES: 0,
                    SIMON: 300,
                    TDES: 300,
                    IDEA: 300,
                    Serpent: 0,
                    Blowfish: 0
                }
            },
            {
                answer: "128",
                points: {
                    DES: 0,
                    AES: 300,
                    SIMON: 0,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 300,
                    Blowfish: 0
                }
            },
            {
                answer: "256",
                points: {
                    DES: 0,
                    AES: 0,
                    SIMON: 0,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 0,
                    Blowfish: 0
                }
            },
            {
                answer: "Variable",
                points: {
                    DES: 0,
                    AES: 0,
                    SIMON: 300,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 0,
                    Blowfish: 0
                }
            },
        ], // end options
    },

    {
        question: "Would you require only patented ciphers?",
        options: [
            {
                answer: "Yes",
                points: {
                    DES: 100,
                    AES: 100,
                    SIMON: 100,
                    TDES: 100,
                    IDEA: 100,
                    Serpent: 0,
                    Blowfish: 100
                }
            },
            {
                answer: "No",
                points: {
                    DES: 0,
                    AES: 0,
                    SIMON: 0,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 100,
                    Blowfish: 0
                }
            },
        ], // end options
    },

    {
        question: "What data type would your application require screening?",
        options: [
            {
                answer: "Transfer Protocols",
                points: {
                    DES: 0,
                    AES: 100,
                    SIMON: 0,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 0,
                    Blowfish: 0
                }
            },
            {
                answer: "Digital Data",
                points: {
                    DES: 100,
                    AES: 0,
                    SIMON: 0,
                    TDES: 100,
                    IDEA: 100,
                    Serpent: 100,
                    Blowfish: 100
                }
            },
            {
                answer: "Internet of Things",
                points: {
                    DES: 0,
                    AES: 0,
                    SIMON: 100,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 0,
                    Blowfish: 0
                }
            },
            {
                answer: "Hardware",
                points: {
                    DES: 0,
                    AES: 0,
                    SIMON: 100,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 0,
                    Blowfish: 0
                }
            },
            {
                answer: "Stream Data",
                points: {
                    DES: 0,
                    AES: 0,
                    SIMON: 0,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 50,
                    Blowfish: 0
                }
            },
        ], // end options
    },

    {
        question: "What information would your application be securing?",
        options: [
            {
                answer: "Highly Sensitive Data (passwords, private personal info, etc.)",
                points: {
                    DES: 0,
                    AES: 200,
                    SIMON: 0,
                    TDES: 100,
                    IDEA: 100,
                    Serpent: 100,
                    Blowfish: 100
                }
            },
            {
                answer: "Less important/non-private data",
                points: {
                    DES: 50,
                    AES: 50,
                    SIMON: 50,
                    TDES: 50,
                    IDEA: 50,
                    Serpent: 50,
                    Blowfish: 50
                }
            },
        ], // end options
    },

    {
        question: "What attacks may your application be vulnerable too?",
        options: [
            {
                answer: "Brute Force",
                points: {
                    DES: 0,
                    AES: 100,
                    SIMON: 0,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 100,
                    Blowfish: 200
                }
            },
            {
                answer: "Exhaustive Search",
                points: {
                    DES: 0,
                    AES: 200,
                    SIMON: 0,
                    TDES: 100,
                    IDEA: 0,
                    Serpent: 100,
                    Blowfish: 200
                }
            },
            {
                answer: "Eavesdropping",
                points: {
                    DES: 100,
                    AES: 100,
                    SIMON: 100,
                    TDES: 100,
                    IDEA: 100,
                    Serpent: 100,
                    Blowfish: 100
                }
            },
            {
                answer: "Meet-in-the-middle (Biclique attack)",
                points: {
                    DES: 0,
                    AES: 50,
                    SIMON: 0,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 0,
                    Blowfish: 200
                }
            },
        ], // end options
    },

    {
        question: "Does the hardware your application run on have AES hardware acceleration (ex: Intel AES-NI)?",
        options: [
            {
                answer: "Yes",
                points: {
                    DES: 0,
                    AES: 300,
                    SIMON: 0,
                    TDES: 0,
                    IDEA: 100,
                    Serpent: 100,
                    Blowfish: 0
                }
            },
            {
                answer: "No",
                points: {
                    DES: 0,
                    AES: 0,
                    SIMON: 0,
                    TDES: 0,
                    IDEA: 0,
                    Serpent: 0,
                    Blowfish: 0
                }
            },
        ], // end options
    },

    {
        question: "The prominence/relevance of different ciphers can indicate how many attacks/cryptnalysis strategies have been attempted and analysed against it. Is this vital or are more experimental but still theoretically proven ciphers alright as well?",
        options: [
            {
                answer: "More experimental is fine!",
                points: {
                    DES: 0,
                    AES: 0,
                    SIMON: 100,
                    TDES: 0,
                    IDEA: 100,
                    Serpent: 100,
                    Blowfish: 100
                }
            },
            {
                answer: "No I'd rather have more established ciphers",
                points: {
                    DES: 100,
                    AES: 100,
                    SIMON: 0,
                    TDES: 100,
                    IDEA: 0,
                    Serpent: 0,
                    Blowfish: 0
                }
            },
        ], // end options
    },

];

const cipherPoints = {
    DES: 0,
    AES: 0,
    SIMON: 0,
    TDES: 0,
    IDEA: 0,
    Serpent: 0,
    Blowfish: 0,
}

const Quiz = () => {

    const [quiz, setQuiz] = useState(questions);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(cipherPoints);

    const pickAnswer = (e) => {

        const index = e.target.getAttribute("data-index");
        const awardPts = questions[number].options[index].points;
        let newPts = {
            DES: pts.DES + awardPts.DES,
            AES: pts.AES + awardPts.AES,
            SIMON: pts.SIMON + awardPts.SIMON,
            TDES: pts.TDES + awardPts.TDES,
            IDEA: pts.IDEA + awardPts.IDEA,
            Serpent: pts.Serpent + awardPts.Serpent,
            Blowfish: pts.Blowfish + awardPts.Blowfish,
        }
        setPts(newPts);
        // console.log(pts);  // DEBUG CODE
        setNumber(number + 1);
    }

    useEffect(() => {

    }, []);


    return (
        <QuizWindow>
            { quiz[number] &&

                <>
                    <Question dangerouslySetInnerHTML={{ __html: quiz[number].question }}></Question>

                    <Options>
                        {quiz[number].options.map((item, index) => (
                            <Option key={index} data-index={index} dangerouslySetInnerHTML={{ __html: item.answer }} onClick={pickAnswer}></Option>
                        ))}
                    </Options>
                </>

            }
            {
                number === 11 && <QuizEnd pts={pts} />
            }
        </QuizWindow>
    )
}

export default Quiz
