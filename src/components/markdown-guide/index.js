import React from 'react';
import { Block, Container, Content, Heading, Section } from 'react-bulma-components';
import { headingsAndParagraphs, emphasis, lists, 
    images, code, blockquotes, taskLists } from './panel-content';
import { rawMarkup } from '../../utils';

const colWidth = {
    minWidth: "35%"
};

const SectionRow = ({ children, subtitle }) => (
    <Block className="is-flex flex-row is-justify-content-space-evenly">
        {subtitle && <Heading renderAs="h3" className="is-size-4">{subtitle}</Heading>}
        {children}
    </Block>
)

const MarkdownHelperPanelSection = ({ title, children }) => (
    <Block>
        <h2 className="subtitle has-text-centered">{title}</h2>
        {children}
    </Block>
);


function MarkdownHelperModal() {

    return (
        <Content style={{ fontSize: "0.7rem"}}>
            <Block className="is-flex is-flex-direction-column">
                <HeadingsAndParagraphs />
                <Emphasis />
                <Blockquotes />
                <Lists />
                <Images />
                <Code />
                <TaskLists />
            </Block>
        </Content>
    )
}


const HeadingsAndParagraphs = () => (
    <MarkdownHelperPanelSection title={"Headings and Paragraphs"}>
        {headingsAndParagraphs && headingsAndParagraphs
        .slice(0, headingsAndParagraphs.length - 1)
        .map((sample, index) => (
            <SectionRow key={index}>
                <div style={colWidth} 
                className="has-text-right"
                dangerouslySetInnerHTML={{ __html: rawMarkup(sample) }}></div>
                <div style={colWidth}>{sample}</div>
            </SectionRow>
        ))}
            <SectionRow>
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
            </SectionRow>
    </MarkdownHelperPanelSection>
);

const Emphasis = () => (
    <MarkdownHelperPanelSection title={"Emphasis"}>
        {emphasis && emphasis.map((sample, index) => (
            <SectionRow key={index}>
                <div style={colWidth} 
                className="has-text-right" 
                dangerouslySetInnerHTML={{ __html: rawMarkup(sample) }}></div>
                <div style={colWidth}>{sample}</div>
            </SectionRow>
        ))}
    </MarkdownHelperPanelSection>
);

const Blockquotes = () => (
    <MarkdownHelperPanelSection title={"Blockquotes"}>

    </MarkdownHelperPanelSection>
);

const Images = () => (
    <MarkdownHelperPanelSection title={"Images"}>
        <SectionRow subtitle={images.title}>
        <div style={colWidth}>
            {images.content}
        </div>
        <div style={colWidth} dangerouslySetInnerHTML={{ __html: rawMarkup(images.content) }} />
        </SectionRow>
        
    </MarkdownHelperPanelSection>
);

const Lists = () => (
    <MarkdownHelperPanelSection title={"Lists"}>
        {lists && lists.map((sample, index) => (
            <SectionRow key={index} title={sample.subtitle}>
                <div dangerouslySetInnerHTML={{ __html: rawMarkup(sample.content)}}></div>
                <div style={{ whiteSpace: "pre-wrap"}}>{sample.content}</div>
            </SectionRow>
        ))}
    </MarkdownHelperPanelSection>
);

const Code = () => (
    <MarkdownHelperPanelSection title="Code">
        <SectionRow>
            <div dangerouslySetInnerHTML={{ __html: rawMarkup(code) }}/>
        </SectionRow>
    </MarkdownHelperPanelSection>
);

const TaskLists = () => (
    <MarkdownHelperPanelSection title="Task Lists">
            {taskLists && taskLists.map((sample, index) => (
                <SectionRow key={index}>
                <div dangerouslySetInnerHTML={{ __html: rawMarkup(sample)}}></div>
                <div style={{ whiteSpace: "pre-wrap"}}>{sample}</div>
            </SectionRow>
            ))}
    </MarkdownHelperPanelSection>
)


export { MarkdownHelperModal, MarkdownHelperPanelSection }