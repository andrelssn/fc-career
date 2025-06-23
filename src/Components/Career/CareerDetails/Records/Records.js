import { Trans } from "react-i18next";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// Style
import "./Style.css";

export default function Records({ apiDetails }) {
    return (
        <Box className="records-section">
            <TableContainer className="table-records">
                <Table size="small">
                    <TableHead>
                        <TableCell sx={{ color: "var(--text-secondary)" }}>
                            <Trans>Recordes</Trans>
                        </TableCell>
                    </TableHead>

                    <TableBody>
                        { apiDetails.Records.map((data) => {
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