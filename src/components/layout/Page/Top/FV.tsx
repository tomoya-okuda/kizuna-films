import CountDate from '@/components/ui/Others/CountDate';
import CountTime from '@/components/ui/Others/CountTime';

type Props = {};

function FV({}: Props) {
  return (
    <div className="border-b-black100 py-6 px-3">
      <div className="flex justify-between">
        <CountDate />
        <CountTime />
      </div>
    </div>
  );
}

export default FV;
