type Mods = Record<string, boolean | string>;

export function classNames(
    main: string,
    modifiers: Mods,
    additional: string[],
) {
    return [
        main,
        ...Object.entries(modifiers)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional.filter(Boolean),
    ].join(" ");
}
