import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Network } from 'lucide-react';

const TopDestinationIp = ({ data }) => {
  return (
    <Card className="shadow-md my-4">
      <CardHeader className="pb-3 border-b flex items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Network className="mr-2 h-5 w-5 text-purple-600" />
          Top Destination IPs
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        <div className="mb-5 grid grid-cols-1 md:grid-cols-5 gap-4">
          {data?.map((ip) => (
            <div
              key={ip?.key}
              className="text-center dark:bg-[var(--sidebar)] p-4 bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center justify-center"
            >
              <div className="p-2 rounded-full bg-purple-100">
                <Network className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-xl font-semibold mt-2">{ip?.doc_count}</p>
              <p className="text-xs text-gray-500 mt-1">{ip?.key}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopDestinationIp;
