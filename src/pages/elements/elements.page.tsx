import { useState } from "react"

import { Alert } from "../../components/alert/alert.component"

export const Elements = () => {
    const [alert, setAlert] = useState<boolean>(true)
    
    const closeAlert = () => {
        setAlert(false)
    }

    return (
        <div>
            { alert && <Alert onClose={closeAlert} variant="success" position="bottom-right" content="Text text for text texxt" /> }
        </div>
    )
}
