import { CookiesProvider } from "react-cookie";
import RouterFun from "./app1";
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CookiesProvider>
                <RouterFun/>
            </CookiesProvider>
        </LocalizationProvider>
    </React.StrictMode>
)