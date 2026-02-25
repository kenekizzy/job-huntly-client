import JobDescription from '@/features/JobDescription/JobDescription';

export default function JobDescriptionPage({ params }: { params: { id: string } }) {
  return <JobDescription jobId={params.id} />;
}
