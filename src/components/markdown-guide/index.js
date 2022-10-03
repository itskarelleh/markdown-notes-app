import React from 'react';
import { Block, Content, Heading } from 'react-bulma-components';
import { headingsAndParagraphs, emphasis, lists, 
    images, code, blockQuotes, taskLists } from './panel-content';
import { rawMarkup } from '../../utils';

const colWidth = {
    minWidth: "35%"
};

const SectionDiv = ({ children, 
    subtitle: label, isFlexRow,
    justifyContent }) => (
    <Block className={`is-flex ${isFlexRow ? `is-flex-direction-row` : `is-flex-direction-column`} 
    ${justifyContent ? justifyContent : `is-justify-content-space-evenly`}`}>
        {label && <Heading renderAs="h3" className="is-size-4">{label}</Heading>}
        {children}
    </Block>
)

const MarkdownHelperPanelSection = ({ title, children }) => (
    <Block className="mx-4">
        <h2 className="subtitle has-text-centered">{title}</h2>
        {children}
    </Block>
);


function MarkdownHelperModal() {

    return (
        <Content style={{ fontSize: "0.7rem", width: "100%" }}>
            <Block className="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center">
                <HeadingsAndParagraphs />
                <Emphasis />
                <Lists />
                <TaskLists />
                <BlockQuotes />
                <Images />
                <Code />
            </Block>
        </Content>
    )
}


const HeadingsAndParagraphs = () => (
    <MarkdownHelperPanelSection title={"Headings and Paragraphs"}>
        {headingsAndParagraphs && headingsAndParagraphs
        .slice(0, headingsAndParagraphs.length - 1)
        .map((sample, index) => (
            <SectionDiv key={index}>
                <div style={colWidth} 
                className="has-text-right"
                dangerouslySetInnerHTML={{ __html: rawMarkup(sample) }}></div>
                <div style={colWidth}>{sample}</div>
            </SectionDiv>
        ))}
            <SectionDiv>
                <div style={colWidth} 
                className="has-text-right"
                dangerouslySetInnerHTML={
                    { __html: rawMarkup(headingsAndParagraphs[headingsAndParagraphs.length-1]) 
                    }}>
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
    <MarkdownHelperPanelSection title={"Emphasis"}>
        {emphasis && emphasis.map((sample, index) => (
            <SectionDiv key={index}>
                <div style={colWidth} 
                className="has-text-right" 
                dangerouslySetInnerHTML={{ __html: rawMarkup(sample) }}></div>
                <div style={colWidth}>{sample}</div>
            </SectionDiv>
        ))}
    </MarkdownHelperPanelSection>
);

const BlockQuotes = () => (
    <MarkdownHelperPanelSection title={"Blockquotes"}>
        {blockQuotes.map((blockQuote) => (
            <SectionDiv>
                <div>
                    <h6>{blockQuote.label}</h6>
                </div>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: rawMarkup(blockQuote.content)}}>
                    </div>
                    <div>{blockQuote.content}</div>
                </div>
            </SectionDiv>
        ))}
    </MarkdownHelperPanelSection>
);

const Images = () => (
    <MarkdownHelperPanelSection title={"Images"}>
        <SectionDiv subtitle={images.title}>
        <div style={colWidth}>
            {images.content}
        </div>
        <div style={colWidth} dangerouslySetInnerHTML={{ __html: rawMarkup(images.content) }} />
        </SectionDiv>
        
    </MarkdownHelperPanelSection>
);

const Lists = () => (
    <MarkdownHelperPanelSection title={"Lists"}>
        {lists.map((sample, index) => (
            <SectionDiv key={index} title={sample.subtitle}>
                <div dangerouslySetInnerHTML={{ __html: rawMarkup(sample.content)}}></div>
                <div style={{ whiteSpace: "pre-wrap"}}>{sample.content}</div>
            </SectionDiv>
        ))}
    </MarkdownHelperPanelSection>
);

const Code = () => (
    <MarkdownHelperPanelSection title="Code">
        <SectionDiv>
            <div dangerouslySetInnerHTML={{ __html: rawMarkup(code) }}/>
        </SectionDiv>
    </MarkdownHelperPanelSection>
);

const TaskLists = () => (
    <MarkdownHelperPanelSection title="Task Lists">
            {taskLists.map((sample, index) => (
                <SectionDiv key={index}>
                <div dangerouslySetInnerHTML={{ __html: rawMarkup(sample)}}></div>
                <div style={{ whiteSpace: "pre-wrap"}}>{sample}</div>
            </SectionDiv>
            ))}
    </MarkdownHelperPanelSection>
)


export { MarkdownHelperModal, MarkdownHelperPanelSection }