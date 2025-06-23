import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// Style
import "./Style.css";
import { Trans } from "react-i18next";

export default function Achievements({ apiDetails }) {
    return (
        <Box className="achievements-section">
            <TableContainer className="table-achievements">
                <Table size="small">
                    <TableHead>
                        <TableCell sx={{ color: "var(--text-secondary)" }}>
                            <Trans>Títulos</Trans>
                        </TableCell>

                        <TableCell align="center" sx={{ color: "var(--text-secondary)" }}>
                            Total
                        </TableCell>
                    </TableHead>

                    <TableBody>
                        { apiDetails.Achievements.map((data) => {
                            return (
                                <TableRow>
                                    <TableCell sx={{ color: "var(--text)" }}>
                                        {data.name}
                                    </TableCell>

                                    <TableCell align="center">
                                        <span style={{ color: "var(--text)" }}>
                                            {data.quantity}
                                        </span>
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