import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider";
import { RootLayout } from "./layouts/RootLayout";
import { Dashboard } from "./pages/Dashboard";
import { ItemDetails } from "./pages/ItemDetails";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Placeholder } from "./pages/Placeholder";

export function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route element={<ProtectedRoute />}>
                        <Route element={<RootLayout />}>
                            <Route path="/" element={<Navigate to="/dashboard" replace />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/courses/:id" element={<ItemDetails />} />
                            <Route
                                path="/courses"
                                element={
                                    <Placeholder
                                        title="Descobrir Cursos"
                                        description="O catálogo completo e os filtros de cursos estarão disponíveis em breve."
                                    />
                                }
                            />
                            <Route
                                path="/calendar"
                                element={
                                    <Placeholder
                                        title="Calendário de Aulas"
                                        description="A visualização detalhada do calendário das suas lições estará disponível em breve."
                                    />
                                }
                            />
                            <Route
                                path="/community"
                                element={
                                    <Placeholder
                                        title="Comunidade"
                                        description="O espaço de troca e discussões com outros alunos e instrutores estará disponível em breve."
                                    />
                                }
                            />
                        </Route>
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
