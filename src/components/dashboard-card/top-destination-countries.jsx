import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

const TopDestinationCountries = ({ data }) => {
  return (
    <Card className="shadow-md my-4">
      <CardHeader className="pb-3 border-b flex items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Globe className="mr-2 h-5 w-5 text-sky-600" />
          Top Destination Countries
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        <div className="mb-5 grid grid-cols-1 md:grid-cols-5 gap-4">
          {data?.map((country) => (
            <div
              key={country?.key}
              className="text-center p-4 dark:bg-[var(--sidebar)] bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center justify-center"
            >
              <div className="p-2 rounded-full bg-sky-50">
                <Globe className="h-5 w-5 text-sky-600" />
              </div>
              <p className="text-xl font-semibold mt-2">{country?.doc_count}</p>
              <p className="text-xs text-gray-500 mt-1">{country?.key}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopDestinationCountries;
