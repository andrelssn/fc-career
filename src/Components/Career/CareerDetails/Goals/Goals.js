import { Trans } from "react-i18next";
import { Box, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// Style
import "./Style.css";

export default function Goals({ apiDetails }) {
    return (
        <Box className="goals-section">
            <TableContainer className="table-goals">
                <Table size="small">
                    <TableHead>
                        <TableCell sx={{ color: "var(--text-secondary)" }}>
                            <Trans>Objetivo</Trans>
                        </TableCell>

                        <TableCell sx={{ color: "var(--text-secondary)" }}>
                            <Trans>Dificuldade</Trans>
                        </TableCell>
                    </TableHead>

                    <TableBody>
                        { apiDetails.Goals.map((data) => {
                            return (
                                <TableRow>
                                    <TableCell sx={{ color: "var(--text)" }}>
                                        {data.goal}
                                    </TableCell>

                                    <TableCell>
                                        <Rating
                                            name="level"
                                            sx={{ fontSize: 24, margin: "auto" }}
                                            value={data.goal_level}
                                            readOnly
                                        />
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