import { useState } from "react";

type Active = boolean;

interface UseActiveResult {
    active: Active;
    toggleActive: () => void;
}

export const useActive = (defaultValue: Active = false): UseActiveResult => {
    const [active, setActive] = useState<Active>(defaultValue);

    const toggleActive = () => {
        setActive((prev) => !prev);
    };

    return { active, toggleActive };
};
