import React from 'react';
import "./markdown-guide.scss";
import { Block, Content, Heading } from 'react-bulma-components';
import { headingsAndParagraphs, emphasis, lists, 
    images, code, blockQuotes } from './panel-content';
import { rawMarkup } from '../../utils';
import { useContext } from 'react';
import { ThemeContext, dark } from '../../context/ThemeProvider';

const colWidth = {
    minWidth: "50%"
};

const whiteSpaceStyle = { 
    whiteSpace: "pre-wrap"
};

const tableOfContents = [
    {label: "Headings and Paragraphs", target: "#headings-and-paragraphs"},
    {label: "Emphasis", target: "#emphasis"},
    {label: "Lists", target: "#lists"},
    {label: "Block Quotes", target: "#block-quotes"},
    {label: "Images", target: "#images"},
    {label: "Code", target: "#code"},
]

const MarkdownAndResultsHeading = () => {
    return (
        <div className="is-flex is-flex-direction-row is-justify-content-center" style={{ borderBottom: '1px solid #CCC' }}>
            <h3 style={{ width: '50%' }} className="has-text-right mr-3">Markdown</h3>
            <h3 style={{ width: '50%' }} className="has-text-left">Result</h3>
        </div>
    )
}

const SectionDiv = ({ children, subtitle: label, isFlexRow, justifyContent }) => (
    <Block className={`is-flex ${isFlexRow ? `is-flex-direction-row` : `is-flex-direction-column`} 
    ${justifyContent ? justifyContent : `is-justify-content-center`}`}>
        {label && <Heading renderAs="h3" className="is-size-4">{label}</Heading>}
        {children}
    </Block>
);

const MarkdownHelperPanelSection = ({ title, id, children }) => (
    <div className="block mx-4" id={id}>
        <h2 className="subtitle has-text-centered">{title}</h2>
        {children}
    </div>
);

function MarkdownGuideModal() {

    const { toggle } = useContext(ThemeContext);

    return (
        <>
        <Content style={{ fontSize: "0.7rem", width: "100%" }}>
            <div className="columns is-mobile">
            <section id="markdownguide-toc" className="box column is-hidden-mobile is-one-quarter">
                    <ul className="is-flex-direction-column is-flex is-justify-content-space-evenly">
                        {tableOfContents && tableOfContents.map((item, index) => (
                        <li key={index}>
                            <a href={item.target}>{item.label}</a>
                        </li>
                        ))}
                    </ul>
                </section>
                <section id="markdown-guide-content" className={`column is-full-mobile is-three-quarters ${!toggle ? "has-background-white-ter" : dark.background.className}`}>
                    <div id="content-wrapper" className="block is-flex is-flex-direction-column is-flex-wrap-wrap is-justify-content-center">
                        <HeadingsAndParagraphs />
                        <Emphasis />
                        <Lists />
                        <BlockQuotes />
                        <Images />
                        <Code />
                    </div>
                </section>
            </div>
        </Content>
        </>
    )
}

const HeadingsAndParagraphs = () => (
    <MarkdownHelperPanelSection id="headings-and-paragraphs" title={"Headings and Paragraphs"}>
        <MarkdownAndResultsHeading />
        {headingsAndParagraphs && headingsAndParagraphs
        .slice(0, headingsAndParagraphs.length - 1)
        .map((sample, index) => (
            <SectionDiv key={index} isFlexRow justifyContent="is-justify-content-center">
                <div className="has-text-right mr-3">{sample}</div>
                <div className="has-text-left"
                dangerouslySetInnerHTML={{ __html: rawMarkup(sample) }}></div>
            </SectionDiv>
        ))}
        <SectionDiv key={headingsAndParagraphs.length} isFlexRow justifyContent="is-justify-content-center">
            <div style={colWidth} className="has-text-right mr-3">
                    {headingsAndParagraphs[headingsAndParagraphs.length - 1]}
            </div>
            <div style={colWidth}>
                No special characters need
                <br/>
                Just start typing 👍
            </div>
        </SectionDiv>
    </MarkdownHelperPanelSection>
);

const Emphasis = () => (
    <MarkdownHelperPanelSection id="emphasis" title={"Emphasis"}>
        <MarkdownAndResultsHeading />
        {emphasis && emphasis.map((sample, index) => (
            <SectionDiv key={index} isFlexRow>
                <div className="has-text-right mr-3">{sample}</div>
                <div
                className="has-text-left" 
                dangerouslySetInnerHTML={{ __html: rawMarkup(sample) }}></div>
            </SectionDiv>
        ))}
    </MarkdownHelperPanelSection>
);

const Lists = () => (
    <MarkdownHelperPanelSection id="lists" title={"Lists"}>
        <MarkdownAndResultsHeading />
        {lists.map((sample, index) => (
            <>
            <h6>{sample.subtitle}</h6>
            <SectionDiv key={index} isFlexRow>
                <div style={whiteSpaceStyle}>{sample.content}</div>
                <div style={whiteSpaceStyle} dangerouslySetInnerHTML={{ __html: rawMarkup(sample.content)}}></div>
            </SectionDiv>
            </>
        ))}
    </MarkdownHelperPanelSection>
);

const BlockQuotes = () => (
    <MarkdownHelperPanelSection id="block-quotes" title={"Blockquotes"}>
        {blockQuotes.map((blockQuote) => (
            <SectionDiv>
                <div>
                    <h6>{blockQuote.label}</h6>
                </div>
                <div>
                    <div><h6>Markdown:</h6> {blockQuote.content}</div>
                    <br/>
                    <div dangerouslySetInnerHTML={{ __html: rawMarkup(blockQuote.content)}}>
                    </div>
                </div>
            </SectionDiv>
        ))}
    </MarkdownHelperPanelSection>
);

const Images = () => (
    <MarkdownHelperPanelSection id="images" title={"Images"}>
        <SectionDiv subtitle={images.title} isFlexRow>
        <div style={colWidth}>
            {images.content}
        </div>
        <div style={colWidth} 
        dangerouslySetInnerHTML={{ 
            __html: rawMarkup(images.content) 
        }} />
        </SectionDiv>
        
    </MarkdownHelperPanelSection>
);

const Code = () => (
    <MarkdownHelperPanelSection id="code" title="Code">
        <MarkdownAndResultsHeading />
        <SectionDiv isFlexRow>
            <div style={whiteSpaceStyle}>
            {code}
            </div>
            <div 
            dangerouslySetInnerHTML={{ __html: rawMarkup(code) }}/>
        </SectionDiv>
    </MarkdownHelperPanelSection>
);


export { MarkdownGuideModal as MarkdownHelperModal, MarkdownHelperPanelSection }