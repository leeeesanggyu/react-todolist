import React, {PropsWithChildren} from "react";

type Props = {
    todo: string;
}

export default function Todo({todo}: Props) {
    return (
        <div>
            {todo}
        </div>
    );
}