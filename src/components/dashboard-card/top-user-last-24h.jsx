import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { UserCircle } from 'lucide-react';

const TopUserLast24H = ({ data }) => {
  return (
    <Card className="shadow-md my-4">
      <CardHeader className="pb-3 border-b">
        <CardTitle className="text-lg font-semibold flex items-center">
          <UserCircle className="mr-2 h-5 w-5 text-sky-600" />
          Top Users (Last 24 Hours)
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {data?.map((entry) => (
            <div
              key={entry?.user}
              className="text-center p-4 dark:bg-[var(--sidebar)] bg-gray-50 rounded-lg border border-gray-200 h-full flex flex-col justify-between"
            >
              <p className="text-sm text-gray-500 capitalize">{entry?.user}</p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <div className="p-3 rounded-full bg-sky-100">
                  <UserCircle className="h-5 w-5 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">{entry?.count}</h3>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopUserLast24H;
