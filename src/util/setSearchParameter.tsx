import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
import { useEffect } from "react";

export function setSearchParameter<T extends string>(name: string, value: T, searchParams: ReadonlyURLSearchParams, pathname: string, replace: (href: string, options?: NavigateOptions | undefined) => void) {

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        replace(`${pathname}?${params.toString()}`);
    }, [])

    return 
}