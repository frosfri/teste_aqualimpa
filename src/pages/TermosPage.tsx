
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const TermosPage = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Termos de Serviço</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="prose max-w-none">
              <h2 className="text-xl font-bold mb-4">1. Termos</h2>
              <p className="mb-4">
                Ao acessar o site Aqua Limpa, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
              </p>
              
              <h2 className="text-xl font-bold mb-4">2. Uso de Licença</h2>
              <p className="mb-4">
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Aqua Limpa, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>modificar ou copiar os materiais;</li>
                <li>usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
                <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Aqua Limpa;</li>
                <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                <li>transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
              </ul>
              
              <h2 className="text-xl font-bold mb-4">3. Isenção de responsabilidade</h2>
              <p className="mb-4">
                Os materiais no site da Aqua Limpa são fornecidos 'como estão'. Aqua Limpa não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
              </p>
              
              <h2 className="text-xl font-bold mb-4">4. Limitações</h2>
              <p className="mb-4">
                Em nenhum caso o Aqua Limpa ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em Aqua Limpa, mesmo que Aqua Limpa ou um representante autorizado da Aqua Limpa tenha sido notificado, oralmente ou por escrito, da possibilidade de tais danos.
              </p>
              
              <h2 className="text-xl font-bold mb-4">5. Precisão dos materiais</h2>
              <p className="mb-4">
                Os materiais exibidos no site da Aqua Limpa podem incluir erros técnicos, tipográficos ou fotográficos. Aqua Limpa não garante que qualquer material em seu site seja preciso, completo ou atual. Aqua Limpa pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.
              </p>
              
              <h2 className="text-xl font-bold mb-4">6. Links</h2>
              <p className="mb-4">
                O Aqua Limpa não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Aqua Limpa do site. O uso de qualquer site vinculado é por conta e risco do usuário.
              </p>
              
              <h2 className="text-xl font-bold mb-4">7. Modificações</h2>
              <p className="mb-4">
                O Aqua Limpa pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
              </p>
              
              <h2 className="text-xl font-bold mb-4">8. Lei aplicável</h2>
              <p className="mb-4">
                Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TermosPage;
