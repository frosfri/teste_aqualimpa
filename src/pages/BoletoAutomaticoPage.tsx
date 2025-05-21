
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';

const boletosFake = [
  { id: 1, descricao: 'Fatura Mensal', vencimento: '10/05/2025', valor: 'R$ 150,00', status: 'Pago' },
  { id: 2, descricao: 'Fatura Mensal', vencimento: '10/06/2025', valor: 'R$ 150,00', status: 'Aberto' },
  { id: 3, descricao: 'Fatura Mensal', vencimento: '10/07/2025', valor: 'R$ 150,00', status: 'Pendente' },
];

const BoletoAutomaticoPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    beneficiario: '',
    cpfCnpj: '',
    valor: '',
    frequencia: 'mensal',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Boleto configurado!",
      description: "Seu boleto automático foi configurado com sucesso.",
    });
    
    // Resetar formulário
    setFormData({
      beneficiario: '',
      cpfCnpj: '',
      valor: '',
      frequencia: 'mensal',
    });
  };

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Boleto Automático</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Configurar Boleto Automático</CardTitle>
                <CardDescription>
                  Configure seus boletos para serem gerados automaticamente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="beneficiario">Beneficiário</Label>
                      <Input
                        id="beneficiario"
                        name="beneficiario"
                        value={formData.beneficiario}
                        onChange={handleInputChange}
                        placeholder="Nome do beneficiário"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cpfCnpj">CPF/CNPJ</Label>
                      <Input
                        id="cpfCnpj"
                        name="cpfCnpj"
                        value={formData.cpfCnpj}
                        onChange={handleInputChange}
                        placeholder="000.000.000-00"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="valor">Valor (R$)</Label>
                      <Input
                        id="valor"
                        name="valor"
                        value={formData.valor}
                        onChange={handleInputChange}
                        placeholder="0,00"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="frequencia">Frequência</Label>
                      <Select 
                        value={formData.frequencia} 
                        onValueChange={(value) => handleSelectChange('frequencia', value)}
                      >
                        <SelectTrigger id="frequencia">
                          <SelectValue placeholder="Selecione a frequência" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diario">Diário</SelectItem>
                          <SelectItem value="semanal">Semanal</SelectItem>
                          <SelectItem value="quinzenal">Quinzenal</SelectItem>
                          <SelectItem value="mensal">Mensal</SelectItem>
                          <SelectItem value="bimestral">Bimestral</SelectItem>
                          <SelectItem value="trimestral">Trimestral</SelectItem>
                          <SelectItem value="semestral">Semestral</SelectItem>
                          <SelectItem value="anual">Anual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Configurar Boleto Automático
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Informações</CardTitle>
                <CardDescription>
                  Como funciona o boleto automático
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  O boleto automático permite configurar cobranças recorrentes que serão geradas automaticamente conforme a frequência escolhida.
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold">Benefícios:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Evita atrasos nos pagamentos</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Gera registros automáticos</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Facilita o controle financeiro</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Envio automático ao beneficiário</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Boletos</CardTitle>
              <CardDescription>
                Boletos gerados automaticamente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {boletosFake.map((boleto) => (
                    <TableRow key={boleto.id}>
                      <TableCell className="font-medium">{boleto.id}</TableCell>
                      <TableCell>{boleto.descricao}</TableCell>
                      <TableCell>{boleto.vencimento}</TableCell>
                      <TableCell>{boleto.valor}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          boleto.status === 'Pago' 
                            ? 'bg-green-100 text-green-800' 
                            : boleto.status === 'Aberto' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {boleto.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" onClick={() => {
                          toast({
                            title: "Visualizando boleto",
                            description: `Boleto #${boleto.id} - ${boleto.descricao}`,
                          });
                        }}>
                          Visualizar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default BoletoAutomaticoPage;
