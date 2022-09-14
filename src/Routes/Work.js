import '../CSS/Work.css';
import data from '../Components/WorkData.js';
import {useState} from 'react';

function Work() {

    let [work] = useState(data);

    return (
        <div className="Work">
            <div className='HeaderFont pb-5'>
                Work
            </div>
            <div className="container">
                { // WorkData 반복문
                    work.map((work) => (
                        <div className="WholeBox pt-5 pb-5" key={work.id}>
                            <div className='row'>
                                <div className="mb-5">
                                    <img src={work.image} width="15%" alt='' className='pt-5'/>
                                </div>

                                <div className="my-auto">
                                    <div className='WorkMainText'>
                                        {work.title}
                                    </div>
                                    <div className='WorkSubText pt-5'>
                                        {work.useLang}
                                    </div>
                                    <div className='WorkSubText'>
                                        {work.function}
                                    </div>
                                    <div className='WorkSubText'>
                                        {work.participation}
                                    </div>
                                    <div className="pt-5">
                                        <a href={work.gitLink} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={"https://raw.githubusercontent.com/sitecreater/portfolioStorage.github.io/main/" +
                                                        "icon_github.png"}
                                                alt=''
                                                className='mx-5'/>
                                        </a>
                                        <a href={work.hostLink} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={"https://raw.githubusercontent.com/sitecreater/portfolioStorage.github.io/main/" +
                                                        "icon_site.png"}
                                                alt=''
                                                className='mx-5'/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Work;