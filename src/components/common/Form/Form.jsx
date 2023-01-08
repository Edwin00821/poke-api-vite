import { useState, useEffect } from 'react';
import { usePokemons } from '../../../context/PokemonProvider';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../libs/validate';

import Input from './Input';
import MultiSelect from './MultiSelect';

import { options } from '../../../libs/variables';

export default function Form() {
  const { createPoke, getPoke, updatePoke } = usePokemons();
  const [pokeType, setPokeType] = useState(null);
  const [poke, setPoke] = useState({
    name: '',
    img: '',
    ability: '',
    height: '',
    weight: '',
    hp: '',
    atk: '',
    def: '',
    spatk: '',
    spdef: '',
    spd: '',
  });

  const params = useParams();
  const navigate = useNavigate();

  const {
    watch,
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const loadPokemon = async () => {
      if (params.id) {
        const poke = await getPoke(params.id);
        const {
          id_poke,
          name_poke,
          height_poke,
          weight_poke,
          ability,
          img_poke,
          stats: [
            { base_stat: hp },
            { base_stat: atk },
            { base_stat: def },
            { base_stat: spatk },
            { base_stat: spdef },
            { base_stat: spd },
          ],
          types,
        } = poke;
        setPokeType(types);
        //set the form values
        setPoke({
          name: name_poke,
          img: img_poke,
          ability: ability,
          height: height_poke,
          weight: weight_poke,
          hp,
          atk,
          def,
          spatk,
          spdef,
          spd,
        });
      }
    };
    loadPokemon();
  }, []);

  useEffect(() => {
    // reset form with poke data
    reset(poke);
  }, [poke]);

  const onSubmit = async ({
    name,
    img,
    ability,
    height,
    weight,
    hp,
    atk,
    def,
    spatk,
    spdef,
    spd,
  }) => {
    const stats = [
      { id: 1, name: 'hp', base_stat: hp },
      { id: 2, name: 'attack', base_stat: atk },
      { id: 3, name: 'defense', base_stat: def },
      { id: 4, name: 'special-attack', base_stat: spatk },
      { id: 5, name: 'special-defense', base_stat: spdef },
      { id: 6, name: 'speed', base_stat: spd },
    ];
    // const types = data.types.map((type) => ({ type: { name: type } }));

    const FormatData = {
      id_poke: params.id,
      name_poke: name,
      img_poke: img,
      ability: ability,
      height_poke: height,
      weight_poke: weight,
      stats: stats,
    };

    try {
      if (params.id) {
        console.log('update');
        const FormDataUpdate = { ...FormatData, types: pokeType };

        await updatePoke(params.id, FormDataUpdate);
      } else {
        console.log('create');
        const INDEX_TYPE = Math.floor(Math.random() * 2 + 1);

        const types = [{ id_ctype: Math.floor(Math.random() * 18 + 1) }];
        if (INDEX_TYPE === 2) {
          types.push({ id_ctype: Math.floor(Math.random() * 18 + 1) });

          await createPoke({ ...FormatData, types });
        }
        // console.log({ FormatData });
      }
      navigate('/');
    } catch (error) {
      console.log(error);
    }
    // navigate("/");
  };

  return (
    <div className='text'>
      <h3 className='pt-4 text-2xl text-center'>
        {params.id ? 'Update Pokemon' : 'Create a new Pokemon!!!'}
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='px-8 pt-6 pb-8 mb-4 bg-white rounded'
        // defaultValues={{poke}}
      >
        <div className='mb-4'>
          <Input
            label='Image'
            name='img'
            placeholder='https://raw.githubusercontent.com/PokeAPI/***/16.png'
            errors={errors.img}
            register={register}
          />
        </div>

        <div className='mb-4 md:flex md:justify-between'>
          <div className='mb-4 md:mr-2 md:mb-0'>
            <Input
              label='Name'
              name='name'
              placeholder='Pikachu'
              errors={errors.name}
              register={register}
            />
          </div>
          <div className='md:ml-2'>
            <Input
              label='Ability'
              name='ability'
              placeholder='Static'
              errors={errors.ability}
              register={register}
            />
          </div>
        </div>

        <div className='mb-4 md:flex md:justify-between'>
          <div className='md:ml-2'>
            <Input
              label='Height'
              name='height'
              placeholder='10'
              errors={errors.height}
              register={register}
            />
          </div>
          <div className='md:ml-2'>
            <Input
              label='Weight'
              name='weight'
              placeholder='10'
              errors={errors.weight}
              register={register}
            />
          </div>
        </div>

        <div className='mb-4 md:flex md:justify-between'>
          <div className='md:ml-2'>
            <Input
              label='HP'
              name='hp'
              placeholder='10'
              errors={errors.hp}
              register={register}
            />
          </div>
          <div className='md:ml-2'>
            <Input
              label='Attack'
              name='atk'
              placeholder='10'
              errors={errors.atk}
              register={register}
            />
          </div>
        </div>

        <div className='mb-4 md:flex md:justify-between'>
          <div className='md:ml-2'>
            <Input
              label='Defense'
              name='def'
              placeholder='10'
              errors={errors.def}
              register={register}
            />
          </div>
          <div className='md:ml-2'>
            <Input
              label='Special Attack'
              name='spatk'
              placeholder='10'
              errors={errors.spatk}
              register={register}
            />
          </div>
        </div>

        <div className='mb-4 md:flex md:justify-between'>
          <div className='md:ml-2'>
            <Input
              label='Special Defense'
              name='spdef'
              placeholder='10'
              errors={errors.spdef}
              register={register}
            />
          </div>
          <div className='md:ml-2'>
            <Input
              label='Speed'
              name='spd'
              placeholder='10'
              errors={errors.spd}
              register={register}
            />
          </div>
        </div>

        {/* <div className="mb-4">
        <Controller
          name="types"
          control={control}
          render={(a) => (
            console.log(a)
          )}
        />
      </div> */}

        <div className='mb-6 text-center'>
          <input
            className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
            type='submit'
            value={params.id ? 'Update Pokemon :)' : 'Create Pokemon :)'}
          />
          {isSubmitting ? 'Saving...' : 'Save'}
        </div>
      </form>
    </div>
  );
}
