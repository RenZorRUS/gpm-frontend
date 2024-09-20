import { AppRouter } from "./providers/router"
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import { useTheme } from "@/app/providers/theme";
import ThemeSwitcher from "../widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx";

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <AppRouter />
            <ThemeSwitcher />
        </div>
    )
}

export default App
