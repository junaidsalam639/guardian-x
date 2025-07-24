import ReactMarkdown from 'react-markdown'
import {
    AccordionContent,
} from "@/components/ui/accordion"
import { ScrollArea } from '@/components/ui/scroll-area'

const Documents = ({ documents }) => {
    return (
        <AccordionContent>
            <ScrollArea className="h-[600px] px-1">
                <div className="prose prose-sm max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                    <ReactMarkdown>
                        {documents || "No documentation found."}
                    </ReactMarkdown>
                </div>
            </ScrollArea>
        </AccordionContent>
    )
}

export default Documents
