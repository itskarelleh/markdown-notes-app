import React, { useState, useContext, useEffect } from "react";
import {
  DocumentTable,
  DocumentTableHead,
  DocumentTableRow,
} from "@/components/documents";
import {
  Section,
  SectionBody,
  SectionHead,
} from "@/components/dashboard/sections";
import Main from "@/components/Main";
import CreatePostButton from "@/components/inputs/buttons/CreatePostButton";
import StickyNoteSummary from "@/components/dashboard/StickyNoteSummary";
const faker = require("community-faker");
import { db } from "../../db/fake";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dashboard() {
  const tableHeadRow = ["Title", "Updated At", "Visibility"];

  const stickyNotes = [
    "This is a note",
    "This is also a note",
    "One more note",
    "Again, another note",
    "😁😪🥱"
  ];

  return (
    <Main classname="h-5/6">
      <Section classname="w-full md:w-9/12 border-b-2 pb-3 border-zinc-500/50 md:border-b-0 md:border-r-2 mr-3">
        <SectionHead title="Documents">
          <CreatePostButton label="Create" classname="md:mr-8" />
        </SectionHead>
        <DocumentTable>
          <DocumentTableHead cells={tableHeadRow} />
          <tbody>
            {/* {docs &&
              docs.map((doc, index) => (
                <DocumentTableRow key={index} data={doc} />
              ))} */}
          </tbody>
        </DocumentTable>
      </Section>
      <aside className="w-full md:w-3/12">
        <Section classname="w-full">
          <SectionHead title="Notes">
            <CreatePostButton label="Create" />
          </SectionHead>
          <SectionBody>
            <div className="flex flex-col md:flex-row">
              {stickyNotes && stickyNotes.map((note) => (
                <StickyNoteSummary data={note} />
              ))}
            </div>
          </SectionBody>
        </Section>
      </aside>
    </Main>
  );
}
