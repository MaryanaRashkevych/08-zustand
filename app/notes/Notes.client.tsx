"use client"
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import css from "./notesPage.module.css";
import NoteList from "../../components/NoteList/NoteList";
import NoteModal from "../../components/Modal/Modal";
import NoteForm from "../../components/NoteForm/NoteForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Pagination from "../../components/Pagination/Pagination";
import {  fetchNotes } from "../../lib/api";
 
interface NotesClientProps {
  perPage: number;  
}

export default function NotesClient({ perPage }: NotesClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
 
 
  useEffect(() => {
    setPage(1);
  }, [debouncedSearchTerm]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", {page: page, search: debouncedSearchTerm}],
    queryFn: () => fetchNotes(page, perPage, debouncedSearchTerm),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const notes = data?.notes ?? [];
  const totalPages = data?.totalPages ?? 1;

  if (isLoading) return <p className={css.text}>  Loading, please wait... </p>;
  if (isError) return <p className={css.text} >Could not fetch the list of notes. Plese, try to refresh the page...</p>
    ;

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox onSearch={setSearchTerm} />
        {totalPages > 1 && (
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        )}
        <button className={css.button} onClick={openModal}>
          Create NOTE +
        </button>
      </header>

      <main>
        {notes.length === 0 ? (
          <p className={css.empty}>There are no notes yet. Please create one!</p>
        ) : (
          <NoteList notes={notes} />
        )}
      </main>

      {isModalOpen && (
        <NoteModal onClose={closeModal}>
          <NoteForm onClose={closeModal} />
        </NoteModal>
      )}
    </div>
  );
}

