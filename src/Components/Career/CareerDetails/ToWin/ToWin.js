import { Box, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

// Style
import "./Style.css";
import { Trans } from "react-i18next";

export default function ToWin({ apiDetails }) {

    if (apiDetails.ToWin.length === 0){
        return (
            <Box className="towin-section">
                <Typography textAlign={"center"} pt={1} color="var(--text-secondary)" fontSize={14}>
                    <Trans>Este time já ganhou todos os títulos possíveis a ele.</Trans>
                </Typography>
            </Box>
        )
    };

    return (
        <Box className="towin-section">
            <TableContainer className="table-towin">
                <Table size="small">
                    <TableHead>
                        <TableCell sx={{ color: "var(--text-secondary)" }}>
                            <Trans>A vencer</Trans>
                        </TableCell>
                    </TableHead>

                    <TableBody>
                        { apiDetails.ToWin.map((data) => {
                            return (
                                <TableRow>
                                    <TableCell sx={{ color: "var(--text)" }}>
                                        {data.name}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}