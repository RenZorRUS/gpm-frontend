import { AppRouter } from "./providers/router"
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import { useTheme } from "@/app/providers/theme";

function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <AppRouter />
            <button onClick={toggleTheme}>__THEME_TOGGLE__</button>
        </div>
    )
}

export default App
