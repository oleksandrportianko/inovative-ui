import { useState } from "react"

import { Alert } from "../components/alert/Alert"

export const AlertExample = () => {
    const [alert, setAlert] = useState<boolean>(true)

    const closeAlert = () => {
        setAlert(false)
    }

    return (
        <div>
            {alert && (<Alert close="manually" onClose={closeAlert} variant="success" position="bottom-right">
                <div>
                    <span>Test alert text</span>
                </div>
            </Alert>)}
        </div>
    )
}