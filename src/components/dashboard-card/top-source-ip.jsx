import {
  AlertTriangle,
  Globe,
  Network,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const TopSourceIp = ({ data = [] }) => {
  const maxCount = Math.max(...data.map((ip) => ip.doc_count), 0);

  const topIps = data.filter((ip) => ip.doc_count === maxCount).map((ip) => ip.key);

  const alertText = `Unusual activity from ${topIps[0]}`

  return (
    <Card className="shadow-md my-4">
      <CardHeader className="pb-3 border-b flex items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Network className="mr-2 h-5 w-5 text-indigo-600" />
          Top Source IPs
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        <div className="mb-5 grid grid-cols-1 md:grid-cols-5 gap-4">
          {data.map((ip) => (
            <div
              key={ip.key}
              className="text-center p-4 dark:bg-[var(--sidebar)] bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="flex justify-center mb-2">
                <Globe className="h-5 w-5 text-gray-600" />
              </div>
              <p className="text-sm font-medium break-words">{ip.key}</p>
              <p className="text-xl font-semibold">{ip.doc_count}</p>
              <p className="text-xs text-gray-500">Events</p>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-indigo-50 rounded-lg dark:bg-[var(--sidebar)]">
            <AlertTriangle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium">{alertText}</h4>
              <p className="text-xs text-gray-600 mt-0.5">Just now</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopSourceIp;
