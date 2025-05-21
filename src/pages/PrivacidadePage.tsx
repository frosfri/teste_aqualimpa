
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const PrivacidadePage = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Política de Privacidade</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="prose max-w-none">
              <p className="mb-4">
                A sua privacidade é importante para nós. É política da Aqua Limpa respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Aqua Limpa, e outros sites que possuímos e operamos.
              </p>
              
              <h2 className="text-xl font-bold mb-4">1. Informações que coletamos</h2>
              <p className="mb-4">
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
              </p>
              <p className="mb-4">
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>
              <p className="mb-4">
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
              </p>
              
              <h2 className="text-xl font-bold mb-4">2. O nosso site pode ter links para sites externos que não são operados por nós</h2>
              <p className="mb-4">
                Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
              </p>
              
              <h2 className="text-xl font-bold mb-4">3. Uso de cookies e tecnologias semelhantes</h2>
              <p className="mb-4">
                Nosso site usa cookies para melhorar sua experiência. Os cookies são pequenos arquivos de texto armazenados no seu dispositivo que nos ajudam a:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Entender como você usa nosso site</li>
                <li>Lembrar suas preferências e configurações</li>
                <li>Melhorar sua experiência geral</li>
                <li>Oferecer funcionalidades personalizadas</li>
              </ul>
              <p className="mb-4">
                Você pode controlar os cookies através das configurações do seu navegador. No entanto, desativar cookies pode afetar a funcionalidade do site.
              </p>
              
              <h2 className="text-xl font-bold mb-4">4. Seus direitos de privacidade</h2>
              <p className="mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Direito de acesso aos seus dados pessoais</li>
                <li>Direito de retificação de dados incompletos, inexatos ou desatualizados</li>
                <li>Direito à eliminação dos dados tratados com seu consentimento</li>
                <li>Direito à informação sobre o uso compartilhado de dados</li>
                <li>Direito de revogação do consentimento</li>
              </ul>
              <p className="mb-4">
                Para exercer estes direitos, entre em contato conosco pelos canais disponibilizados neste site.
              </p>
              
              <h2 className="text-xl font-bold mb-4">5. Alterações a esta política</h2>
              <p className="mb-4">
                Reservamo-nos o direito de fazer alterações nesta política de privacidade a qualquer momento. Recomendamos que você a consulte regularmente para verificar atualizações. Mudanças e esclarecimentos entram em vigor imediatamente após sua publicação no site.
              </p>
              
              <h2 className="text-xl font-bold mb-4">6. Contato</h2>
              <p className="mb-4">
                Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
              </p>
              <p className="mb-4">
                Esta política é efetiva a partir de 1 de Janeiro de 2023.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PrivacidadePage;
