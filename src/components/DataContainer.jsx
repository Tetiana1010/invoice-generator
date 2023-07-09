import { useState } from "react";

export default function DataContainer() {

    const currentDate = new Date();

    const futureDate = new Date(currentDate);
    futureDate.setMonth(futureDate.getMonth() + 1);

    const formattedCurrentDate = currentDate.toISOString().split('T')[0];
    const formattedFutureDate = futureDate.toISOString().split('T')[0];

    const [issueDate, setIssueDate] = useState(formattedCurrentDate);
    const [dueDate, setDueDate] = useState(formattedFutureDate);

    console.log(new Date().toISOString())
    return (
        <fieldset className="flex items-end flex-col gap-2">
            <label htmlFor="issue-date">
                <span>Issue date:</span>
                <input 
                    type="date" 
                    name="issue-date" 
                    value={issueDate}
                    onChange={(e) =>setIssueDate(e.target.value)}
                    className="rounded-lg hover:border border-dashed border-white hover:border-gray-900/25 ml-2"/>
            </label>
            <label htmlFor="due-date">
                <span>Due date:</span>
                <input 
                    type="date" 
                    name="due-date" 
                    value={dueDate}
                    onChange={(e) =>setDueDate(e.target.value)}
                    className="rounded-lg hover:border border-dashed border-white hover:border-gray-900/25 ml-2"/>
            </label>
        </fieldset>
    );
};
    