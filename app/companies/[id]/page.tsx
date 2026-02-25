import CompanyProfile from '@/features/CompanyProfile/CompanyProfile';

export default function CompanyProfilePage({ params }: { params: { id: string } }) {
  return <CompanyProfile companyId={params.id} />;
}
