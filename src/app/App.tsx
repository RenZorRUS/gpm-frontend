import { AppRouter } from "./providers/AppRouter";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Header } from "@/widgets/Header";
import { Navbar } from "@/widgets/Navbar";

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames("App", {}, [theme])}>
            <Header />
            <div className="content-wrapper">
                <Navbar />
                <AppRouter className="content-page" />
            </div>
        </div>
    );
}

export default App;
