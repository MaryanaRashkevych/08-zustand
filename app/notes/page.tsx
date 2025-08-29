
import css from  './notesPage.module.css'
import {QueryClient, HydrationBoundary, dehydrate} from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { fetchNotes } from '@/lib/api';


const perPage = 12; 
export default async function NotesPage(){
    const queryClient =new QueryClient();

    await queryClient.prefetchQuery({
queryKey:["notes", {page: 1, search:"" }],
queryFn: ()=>fetchNotes(1, perPage, ""),
    });
    return(
        <div>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <NotesClient perPage={perPage}/>
            </HydrationBoundary>
        </div>
    )
}
