import { IconSearch } from '@tabler/icons-react';

export default function Search() {
    return (
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" />
            <button class="btn btn-secondary" type="submit">
                <IconSearch />
            </button>
        </div>
    )
}