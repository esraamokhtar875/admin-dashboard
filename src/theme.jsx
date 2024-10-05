import { Palette } from "@mui/icons-material";

export const getDesignTokens =(mode) => ({
    Palette: {
        mode,
        ...(mode === "light" ?{

        }:{

        }),
    },
});